import React from 'react';
import {Content} from '../../Components/Content/Content';
import Welcome from './HomeSections/WelcomeSection/WelcomeSection';
import Realization from './HomeSections/RealizationSection/RealizationSection'
import Footer from '../../Components/Footer/Footer';

function Home(props) {
    return (
        <main className='home__main'>
            <Content>
                <Welcome user={props.user}/>
                <Realization/>
            </Content>
            <Footer/>
        </main>
    )
}

export default Home;