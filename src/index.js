import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import {projectsData} from "./data/projectsData";
import {postsData} from "./data/postsData";

ReactDOM.render(
    <Router>
        <App projects={projectsData} posts={postsData}/>
    </Router>
    , document.getElementById('root'));
