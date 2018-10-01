import React from 'react';
import Header from '../../Components/Header/Header';
import Container from '../../Components/Container/Container';
import Button from '../../Components/Button/Button'
import {Content} from '../../Components/Content/Content';
import Footer from '../../Components/Footer/Footer';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import './login.scss'

class Login extends React.Component {
    onSubmit = event => {
        event.preventDefault();

        this.props.onLogin({
            username: this.usernameInput.value.trim(),
            password: this.passwordInput.value.trim()
        });
    };

    render() {
        return (
            <main className="login">
                <Content>
                    <Header user={this.props.user}/>
                    <Container>
                        <ReactCssTransitionGroup
                            transitionAppear={true}
                            transitionAppearTimeout={200}
                            transitionName="fade"
                            component="section"
                            className="login__section">
                            <form onSubmit={this.onSubmit} className="login__form">
                                <h2>Login</h2>
                                <div className="login__textfield">
                                    <input
                                        type="text"
                                        name="username"
                                        className="login__textfield-input"
                                        placeholder="Your name"
                                        ref={input => this.usernameInput = input}/>
                                </div>
                                <div className="login__textfield">
                                    <input
                                        type="password"
                                        name="password"
                                        className="password__textfield-input"
                                        placeholder="Your password"
                                        ref={input => this.passwordInput = input}/>
                                </div>

                                <Button type="submit" className="button button_login">Submit</Button>
                            </form>
                        </ReactCssTransitionGroup>
                    </Container>
                </Content>
                <Footer/>
            </main>
        )
    }
}

export default Login;