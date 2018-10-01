import React from 'react';
import Container from '../../../Components/Container/Container';
import List from '../../../Components/List/List';
import {Link} from 'react-router-dom'
import {partnersData} from "./partnersData";

const Partners = () => {
    return (
        <section className="partners">
            <Container>
                <List className="partners__list">
                    {
                        partnersData.map(item => {
                            return (
                                <li key={item.id}>
                                    <Link to={item.link}><img src={item.image} alt=""/></Link>
                                </li>
                            )
                        })
                    }
                </List>
            </Container>
        </section>
    )
};

export default Partners;