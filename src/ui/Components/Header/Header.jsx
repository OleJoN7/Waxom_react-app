import React from 'react';
import ToolbarLink from '../ToolbarLink/ToolbarLink';
import Button from '../Button/Button';
import List from '../List/List';
import Container from '../../Components/Container/Container';
import logo from './images/logos.png';
import './header.scss';

function Header({user}) {
    return (
        <header className="main-header">
            <Container style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className="logo">
                    <ToolbarLink exact to="/">
                        <img src={logo} alt="logo"/>
                    </ToolbarLink>
                    <h1>Waxom</h1>
                </div>
                <nav className="nav">
                    <List className="nav__list">
                        <li className="nav__list-item"><ToolbarLink exact to="/">Home</ToolbarLink></li>
                        <li className="nav__list-item"><ToolbarLink to="/about">About Us</ToolbarLink></li>
                        <li className="nav__list-item"><ToolbarLink to="/projects">Portfolio</ToolbarLink></li>
                        <li className="nav__list-item"><ToolbarLink to="/features">Features</ToolbarLink></li>
                        <li className="nav__list-item"><ToolbarLink to="/blog">Blog</ToolbarLink></li>
                        <li className="nav__list-item">
                            {user ?
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

export default Header;