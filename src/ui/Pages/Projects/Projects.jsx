import React from 'react';
import {Content} from '../../Components/Content/Content';
import Container from '../../Components/Container/Container'
import Header from '../../Components/Header/Header';
import Project from './ProjectsSections/ProjectSection/Project';
import Video from './ProjectsSections/VideoSection/Video';
import Footer from '../../Components/Footer/Footer';
import './projects.scss'

const Projects = ({data,user}) => {
    return (
        <main className="projects__main">
            <Content>
                <Header user={user}/>
                <Container>
                   <Project data={data}/>
                </Container>
                <Video/>
            </Content>
            <Footer/>
        </main>
    )
};

export default Projects;