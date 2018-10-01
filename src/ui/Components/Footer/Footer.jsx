import React from 'react';
import List from '../../Components/List/List';
import ToolbarLink from '../../Components/ToolbarLink/ToolbarLink';
import {Link} from 'react-router-dom';
import './footer.scss';
import Post from "./support/Post";
import Keyword from "./support/Keyword";
import Time from "./support/Time";
import Container from '../../Components/Container/Container';
import logo from './images/logos-mini.png';
import widget1 from './images/photo-mini1.png';
import widget2 from './images/photo-mini2.png';
import widget3 from './images/photo-mini3.png';
import widget4 from './images/photo-mini4.png';

function Footer() {
    return (
        <footer>
            <div className="footer__list-wrap">
                <List className="footer__list">
                    <li>
                        <div className="footer__logo">
                            <ToolbarLink exact to="/" className="footer__logo-link">
                                <img src={logo} alt="logo-footer"/>
                            </ToolbarLink>
                            <h2>Waxom</h2>
                        </div>
                        <p className="footer__text-info">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci suscipit lobortis claritatem.</p>
                        <Link to="/" className="button button_read-more">Read more</Link>
                    </li>
                    <li>
                        <h3 className="footer__resent-header">Recent Posts</h3>
                        <List className="footer__resent-list">
                            <Post className="footer__text footer__post">
                                <Time className="footer__text-time">September 08, 2015</Time>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                            </Post>
                            <Post className="footer__text footer__post">
                                <Time className="footer__text-time">September 08, 2015</Time>
                                Diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            </Post>
                            <Post className="footer__text footer__post">
                                <Time className="footer__text-time">September 08, 2015</Time>
                                Claritas est etiam processus dynamicus,
                                qui sequitur mutationem per seacula quarta decima
                            </Post>
                        </List>
                    </li>
                    <li>
                        <h3 className="footer__twit-header">Our Twitter</h3>
                        <List className="footer__twit-list">
                            <Post className="footer__text footer__post">
                                <Keyword style={{color: '#00bff3'}}>@waxom </Keyword>
                                Cum soluta nobis eleifend option congue nihil imperdiet doming
                                <Time className="footer__text-time">3 mins ago</Time>
                            </Post>
                            <Post className="footer__text footer__post">
                                Mirum est notare <Keyword style={{color: '#00bff3'}}>@haxpn</Keyword> gothica,
                                quam nunc putamus parum anteposuerit litterarum
                                <Time className="footer__text-time">5 hours ago</Time>
                            </Post>
                            <Post className="footer__text footer__post">
                                Soluta nobis option bit.ly/1Hniso7
                                <Time className="footer__text-time">20 days ago</Time>
                            </Post>
                        </List>
                    </li>
                    <li>
                        <h3 className="footer__widget-header">Dribbble Widget</h3>
                        <List className="footer__widget-list">
                            <li>
                                <Link to="#"><img src={widget1} alt="widget1"/></Link>
                            </li>
                            <li>
                                <Link to="#"><img src={widget2} alt="widget1"/></Link>
                            </li>
                            <li>
                                <Link to="#"><img src={widget3} alt="widget1"/></Link>
                            </li>
                            <li>
                                <Link to="#"><img src={widget4} alt="widget1"/></Link>
                            </li>
                        </List>
                    </li>
                </List>
            </div>
            <div className="footer__sub">
                <Container style={{display:'flex',justifyContent:'space-between'}}>
                <List className="footer__sub-list">
                    <li><Link to="#"> Copyright &copy; 2015 Waxom</Link></li>
                    <li><Link to="#"> Privacy Policy</Link></li>
                    <li><Link to="#"> FAQ</Link></li>
                    <li><Link to="#"> Support</Link></li>
                </List>
                    <p>Designed by <Link to="#" className="footer__design-link">ThemeFire</Link>
                        <Link to="#" className="footer__market-link">Only on Envato Market</Link>
                    </p>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;