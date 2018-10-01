import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header/Header';
import Container from '../../../Components/Container/Container';
import {Content} from '../../../Components/Content/Content';
import Footer from '../../../Components/Footer/Footer';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

class SinglePost extends React.Component {
    componentDidMount() {
        document.querySelector('.main-header').scrollIntoView();
    }

    render() {
        const post = this.props.posts.find(post => post.name === this.props.match.params.post);
        return (
            <main className="features__single-post-main">
                <Content>
                    <Header user={this.props.user}/>
                    <Container>
                        <ReactCssTransitionGroup
                            transitionAppear={true}
                            transitionAppearTimeout={200}
                            transitionName="fade"
                            component="section"
                            className="post__single-item-section">
                            <p className="post__name">It is {post.name}</p>
                            <h1>{post.title}</h1>
                            <h2>{post.text}</h2>
                            <Link to="/features" className="button button_back">Go back to Features</Link>
                        </ReactCssTransitionGroup>
                    </Container>
                </Content>
                <Footer/>
            </main>
        )
    }
};

export default SinglePost;

