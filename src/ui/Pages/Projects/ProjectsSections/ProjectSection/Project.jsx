import React from 'react';
import List from '../../../../Components/List/List';
import Button from "../../../../Components/Button/Button";
import ProjectCard from './ProjectCard';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'all',
            more: false
        };
    }
    isAll = () => {
        let arr = this.props.data.map(item => {
            return (
                <ProjectCard
                    theme={item.theme}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    project={item}
                />
            )
        });
        return arr.slice(0, 6);
    };

    isFiltered = () => {
        let filteredList = this.props.data.filter(item => {
            if (this.state.selected === item.theme) return item
        });
        return filteredList.map(item => {
            return (
                <ProjectCard
                    theme={item.theme}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    project={item}
                />
            )
        })
    };

    showMore = () => {
        return this.props.data.map(item => {
            return (
                <ProjectCard
                    theme={item.theme}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    project={item}
                />
            )
        });
    };

    setFilter(filter) {
        this.setState({
            selected: filter,
            more: false
        });
    };

    isActive(id) {
        return 'button button_project-button ' +
            ((id === this.state.selected) ? 'button_project-active' : '');
    };

    render() {

        return (
            <section className="project">
                <h2 className="project__title">Our Latest Projects.</h2>
                <p className="project__subtitle">Investigationes demonstraverunt lectores legere me lius quod ii legunt
                    saepius.
                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
                <List className="project__names-list">
                    <li>
                        <Button
                            onClick={this.setFilter.bind(this, 'all')}
                            type="button"
                            className={this.isActive('all')}>
                            All</Button>
                    </li>
                    <li>
                        <Button
                            onClick={this.setFilter.bind(this, 'web')}
                            type="button"
                            className={this.isActive('web')}>Web Design</Button></li>
                    <li>
                        <Button
                            onClick={this.setFilter.bind(this, 'mobile')}
                            type="button"
                            className={this.isActive('mobile')}>Mobile App</Button></li>
                    <li>
                        <Button
                            onClick={this.setFilter.bind(this, 'illustration')}
                            type="button"
                            className={this.isActive('illustration')}>Illustration</Button></li>
                    <li>
                        <Button
                            onClick={this.setFilter.bind(this, 'photo')}
                            type="button"
                            className={this.isActive('photo')}>Photography</Button></li>
                </List>
                <ReactCssTransitionGroup
                    transitionLeave={false}
                    transitionEnter={true}
                    transitionAppear={true}
                    transitionAppearTimeout={200}
                    transitionName="fade"
                    component="ul"
                    className="project__works-list">
                    {
                        this.state.more === false
                            ? (this.state.selected === 'all' ? this.isAll() : this.isFiltered())
                            : this.showMore()

                    }
                </ReactCssTransitionGroup>
                <Button onClick={() => this.setState({selected: 'all', more: true})}
                        className="button button_load-more">Load More</Button>
            </section>
        )
    }
}

export default Project;