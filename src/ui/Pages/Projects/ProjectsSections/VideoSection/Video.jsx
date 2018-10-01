import React from 'react';
import VideoPlayer from './VideoPlayer';
import $ from "jquery";

class Video extends React.Component {
    componentDidMount() {
        $('.video-react-big-play-button').click(function() {
            $('.poster__title').addClass('none')
        })
    }
    componentWillUnmount() {
        $('.video-react-big-play-button').click(function() {
            $('.poster__title').removeClass('none')
        })
    }
    render() {
        return (
            <section className="project__video">
                <VideoPlayer/>
                <div className="poster__title">
                    <h3>Waxom Video Presentation</h3>
                    <p className="poster__subtitle">Investigationes demonstraverunt lectores legere me lius quod
                        ii legunt saepius, qui sequitur mutationem consuetudium.</p>
                </div>
            </section>
        )
    }

}
export default Video;