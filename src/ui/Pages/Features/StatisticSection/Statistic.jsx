import React from 'react';
import Container from '../../../Components/Container/Container';
import List from '../../../Components/List/List';
import {statisticData} from "./statisticData";


const Statistic = () => {
    return (
        <section className="statistic">
            <Container>
                <List className="statistic__list">
                    {
                        statisticData.map(item => {
                            return (
                                <li className="statistic__list-item" key={item.id}>
                                    <div className="img-wrap">
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <p className="statistic__count">
                                        {item.count}
                                    </p>
                                    <p className="statistic__title">
                                        {item.name}
                                    </p>
                                </li>
                            )
                        })
                    }
                </List>
            </Container>
        </section>
    )
};

export default Statistic;