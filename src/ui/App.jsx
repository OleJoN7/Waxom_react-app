import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Features from './Pages/Features/Features';
import Login from './Pages/Login/Login'
import Logout from './Pages/Logout/Logout';
import NotFound from './Pages/NotFound/NotFound';
import ProjectItem from "./Pages/Projects/ProjectsSections/ProjectSection/ProjectItem";
import SinglePost from './Pages/Features/PostsSection/SinglePost'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    login = user => {
        this.setState({user}, () => this.props.history.push('/projects'))
    };

    logout = () => {
        this.setState({user: null}, () => this.props.history.push('/'))
    };

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' render={props => <Home user={this.state.user} {...props}/>}/>
                    <Route path='/login' render={props => <Login onLogin={this.login} {...props}/>}/>
                    <Route path='/logout' render={props => <Logout onLogout={this.logout} {...props}/>}/>
                    <PrivateRoute exact
                                  path='/projects'
                                  user={this.state.user}
                                  component={Projects}
                                  data={this.props.projects}/>
                    <PrivateRoute path="/projects/:project"
                                  user={this.state.user}
                                  component={ProjectItem}
                                  data={this.props.projects}/>
                    <Route exact
                           path='/features'
                           render={props => <Features user={this.state.user} posts={this.props.posts} {...props}/>}/>
                    <Route path='/features/:post'
                           render={props => <SinglePost user={this.state.user} posts={this.props.posts} {...props}/>}/>
                    <Route render={() => <NotFound user={this.state.user}/>}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
