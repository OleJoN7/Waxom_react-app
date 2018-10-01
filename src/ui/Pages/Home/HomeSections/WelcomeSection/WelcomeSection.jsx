import React from 'react';
import HomeSlider from '../../../../Components/HomeSlider/HomeSlider';
import Header from '../../../../Components/Header/Header';
import './welcome.scss';

const Welcome = (props) => {
    return (
        <section className="welcome will-change">
                <Header user={props.user}/>
                <HomeSlider/>
        </section>
    )
};

export default Welcome;