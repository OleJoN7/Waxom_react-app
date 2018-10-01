import React from 'react';
import Container from '../../../../Components/Container/Container';
import Button from '../../../../Components/Button/Button';
import List from '../../../../Components/List/List';
import './realization.scss';
import realizationImg from './images/realization-img.png';

function Realization() {

    const realizationList = [
        {
            id: 1,
            className: 'realization__list-web-item',
            classNameIconFont: 'realization__list-font-icon fas fa-pencil-alt',
            header: 'Web & App Design',
            text: 'Nam liber tempor cum soluta nobis eleifend option\n' +
            'congue nihil imperdiet doming id quod mazim.'
        },
        {
            id: 2,
            className: 'realization__list-development-item',
            classNameIconFont: 'realization__list-font-icon fab fa-connectdevelop',
            header: 'Development',
            text: 'Nam liber tempor cum soluta nobis eleifend option\n' +
            'congue nihil imperdiet doming id quod mazim.'
        },
        {
            id: 3,
            classNameIconFont: 'realization__list-font-icon fa fa-cog',
            className: 'realization__list-customization-item',
            header: 'Customization',
            text: 'Nam liber tempor cum soluta nobis eleifend option\n' +
            'congue nihil imperdiet doming id quod mazim.'
        },
        {
            id: 4,
            className: 'realization__list-marketing-item',
            classNameIconFont: 'realization__list-font-icon fas fa-folder-open',
            header: 'Marketing',
            text: 'Nam liber tempor cum soluta nobis eleifend option\n' +
            'congue nihil imperdiet doming id quod mazim.'
        }

    ];

    return (
        <section className="realization">
            <Container>
                <List className="realization__list">
                    {
                        realizationList.map(item => {
                            return (
                                <li key={item.id} className={item.className}>
                                    <i className={item.classNameIconFont}/>
                                    <h4>{item.header}</h4>
                                    <p>{item.text}</p>
                                </li>
                            )
                        })
                    }
                </List>
                <h3 className="realization__header">Waxom is Realization of your Ideas.</h3>
                <p className="realization__text">nvestigationes demonstraverunt lectores legere me lius quod ii legunt
                    saepius.
                    Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
                <div className="realization__img-wrap">
                    <img src={realizationImg} alt="realization-image"/>
                </div>
            </Container>
            <article className="realization__purchase">
                <Container style={{display:'flex',justifyContent:'space-between'}}>
                    <div className="realization__purchase-info">
                        <h3 className="realization__purchase-header"><span className="realization__purchase_text-color">Waxom</span> Multipurpose WordPress Theme</h3>
                        <p className="realization__purchase-text">Don't Forget to Rate the Template. Thanks so much!</p>
                    </div>
                    <Button type="button" className="button button_purchase">Purchase now</Button>
                </Container>
            </article>
        </section>
    )
}

export default Realization;