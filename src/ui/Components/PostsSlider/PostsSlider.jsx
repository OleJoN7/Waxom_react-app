import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import './posts_slider.scss';

class PostsSlider extends React.Component {
    render() {
        let posts = this.props.posts;
        if (window.matchMedia('(max-width: 767px)').matches) {
            this.settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false
            };
        } else {
            this.settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false
            };
        }
        return (
            <Slider {...this.settings}>
                {
                    posts.map(item => {
                        return (
                            <div className="posts__list-item" key={item.id}>
                                <div className="posts__date">
                                    <p className="date-number">30</p>
                                    <p className="date-month">Sep</p>
                                </div>
                                <div className="img-wrap">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="posts__description">
                                    <h4 className="posts__description-title">{item.title}</h4>
                                    <p className="posts__description-text">{item.text}</p>
                                    <Link to={`/features/${item.name}`} className="posts__link">Read more</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        );
    }
}

export default PostsSlider;