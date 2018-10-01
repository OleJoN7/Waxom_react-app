import React from 'react';
import Button from '../../../../Components/Button/Button';
import {Link} from 'react-router-dom';
import link from './images/link.png';
import lupa from './images/lupa.png';

function ProjectCard({project, ...props}) {
    const {image, title, subtitle} = props;
    return (
        <li className="project__item">
            <div className="project__item-img">
                <img src={image} alt="project-image"/>
                <Button className="button button_link"><img src={link} alt=""/></Button>
                <Link to={`/projects/${project.name}`}
                      className="button button_lupa"><img src={lupa} alt=""/>
                </Link>
            </div>
            <div className="project__item-title">
                <p className="project__item-title-text">{title}</p>
                <p className="project__item-subtitle-text">{subtitle}</p>
            </div>
        </li>
    )
}

export default ProjectCard;