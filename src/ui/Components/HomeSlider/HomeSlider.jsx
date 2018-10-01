import React from "react";
import Slider from "react-slick";
import Button from "../Button/Button";
import Container from '../../Components/Container/Container';
import {itemList} from '../../Pages/Home/HomeSections/WelcomeSection/itemList';
import './home_slider.scss';

class HomeSlider extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <Container>
                <Slider {...settings}>
                    {
                        itemList.map(item => {
                            return (
                                <div key={item.id}>
                                    <h3 className={item.secondaryClassName}>{item.secondaryHeader}</h3>
                                    <h2 className={item.mainClassName}>{item.mainHeader}</h2>
                                    <p className={item.textClassName}>{item.text}</p>
                                    <Button type="button" className="button button_started">Get Started</Button>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        );
    }
}

export default HomeSlider;