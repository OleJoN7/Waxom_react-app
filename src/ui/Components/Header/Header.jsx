import React from 'react';
import ToolbarLink from '../ToolbarLink/ToolbarLink';
import Button from '../Button/Button';
import List from '../List/List';
import Container from '../../Components/Container/Container';
import logo from './images/logos.png';
import $ from 'jquery';
import './header.scss';

class Header extends React.Component {
    componentDidMount() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            $('.nav__list').hide();
            $('.button_toogle').show();
        } else if (window.matchMedia('(min-width: 768px)').matches) {
            $('.nav__list').show();
            $('.button_toogle').hide();
        }
        $(window).on('resize', function () {
            if (window.matchMedia('(max-width: 767px)').matches) {
                $('.nav__list').hide();
                $('.button_toogle').show();
            } else if (window.matchMedia('(min-width: 768px)').matches) {
                $('.nav__list').show();
                $('.button_toogle').hide();
            }
        });
        let flag = true;
        $('.button_toogle').on('click', function () {
            if (flag) {
                flag = false;
                $('.nav__list').fadeToggle(200, function () {
                    flag = true;
                });
            }
        });
    }

    render() {
        return (
            <header className="main-header">
                <Container style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <div className="logo">
                        <ToolbarLink exact to="/">
                            <img src={logo} alt="logo"/>
                        </ToolbarLink>
                        <h1>Waxom</h1>
                    </div>
                    <Button className="button button_toogle">
                        <span className="icon">
                        </span>
                        <span className="icon">
                        </span>
                        <span className="icon">
                        </span>
                    </Button>
                    <nav className="nav">
                        <List className="nav__list">
                            <li className="nav__list-item"><ToolbarLink exact to="/">Home</ToolbarLink></li>
                            <li className="nav__list-item"><ToolbarLink to="/about">About Us</ToolbarLink></li>
                            <li className="nav__list-item"><ToolbarLink to="/projects">Portfolio</ToolbarLink></li>
                            <li className="nav__list-item"><ToolbarLink to="/features">Features</ToolbarLink></li>
                            <li className="nav__list-item"><ToolbarLink to="/blog">Blog</ToolbarLink></li>
                            <li className="nav__list-item">
                                {this.props.user ?
                                    <ToolbarLink to="/logout">Logout</ToolbarLink>
                                    :
                                    <ToolbarLink to="/login">Login</ToolbarLink>
                                }
                            </li>
                            <li className="nav__list-icon"><Button type="button"
                                                                   className="button button_backet">backet</Button></li>
                            <li className="nav__list-icon"><Button type="button"
                                                                   className="button button_search">search</Button></li>
                        </List>
                    </nav>
                </Container>
            </header>
        )
    }

}

export default Header;