import React from 'react';
import device from './images/iphone-in-hand.png';
import arrow from './images/arrow-select.png';
import List from '../../../Components/List/List';
import Container from '../../../Components/Container/Container';
import {deviceData} from './deviceData';

const Device = () => {
    return (
        <section className="device">
            <Container style={{display:'flex'}}>
                <div className="device__img-wrap">
                    <img src={device} alt=""/>
                </div>
                <div className="device__description">
                    <h2 className="device__description-title">Excellent for Mobile Devices</h2>
                    <p className="device__description-text">Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores
                        legere me lius quod ii legunt saepius claritas.
                        Eodem modo typi, qui nunc nobis videntur parum clari,
                        fiant sollemnes in futurum.</p>
                    <List className="device__advantages-list">
                        {
                            deviceData.map(item => {
                                return (
                                    <li className="device__advantage-item" key={item.id}>
                                        <div className="arrow-wrap">
                                            <img src={arrow} alt=""/>
                                        </div>
                                        <p>{item.text}</p>
                                    </li>
                                )
                            })
                        }
                    </List>
                </div>
            </Container>
        </section>
    )
};

export default Device;