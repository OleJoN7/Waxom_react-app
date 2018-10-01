import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../../Components/Header/Header';
import Container from '../../../../Components/Container/Container';
import {Content} from '../../../../Components/Content/Content';
import Footer from '../../../../Components/Footer/Footer';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

class ProjectItem extends React.Component {
    componentDidMount() {
        document.querySelector('.main-header').scrollIntoView();
    }
    render() {
        const project = this.props.data.find(project => project.name === this.props.match.params.project);
        return (
            <main className="project__single-item-main">
                <Content>
                    <Header user={this.props.user}/>
                    <Container>
                        <ReactCssTransitionGroup
                            transitionAppear={true}
                            transitionAppearTimeout={200}
                            transitionName="fade"
                            component="section"
                            className="project__single-item-section">
                            <p className="project__name">It is {project.name} project</p>
                            <h1>{project.title}</h1>
                            <h2>{project.subtitle}</h2>
                            <Link to="/projects" className="button button_back">Go to Portfolio</Link>
                        </ReactCssTransitionGroup>
                    </Container>
                </Content>
                <Footer/>
            </main>
        );
    }

}

export default ProjectItem;