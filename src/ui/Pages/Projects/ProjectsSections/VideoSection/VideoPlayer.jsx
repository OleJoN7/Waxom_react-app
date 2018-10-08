import React from 'react';
import {Player} from 'video-react';
import "video-react/dist/video-react.css";
import videoPoster from './images/video-bg.jpg';

function VideoPlayer(props) {
    return (
        <Player
            poster={videoPoster}>
            <source src="http://media.w3.org/2010/05/bunny/movie.mp4"/>
        </Player>
    );
}

export default VideoPlayer;