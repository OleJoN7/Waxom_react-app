import React from 'react';
import Header from '../../Components/Header/Header';
import {Content} from '../../Components/Content/Content';
import Device from './DevicesSection/Device';
import Statistic from './StatisticSection/Statistic';
import Posts from './PostsSection/Posts';
import Partners from './PartnersSection/Partners';
import Footer from '../../Components/Footer/Footer';
import './features.scss';


function Features({posts, user}) {
    return (
        <main className="features__main">
            <Header user={user}/>
            <Content>
                <Device/>
                <Statistic/>
                <Posts posts={posts}/>
                <Partners/>
            </Content>
            <Footer/>
        </main>
    )
}

export default Features;