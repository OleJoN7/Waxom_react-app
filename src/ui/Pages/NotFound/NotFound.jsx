import React from 'react';
import Container from '../../Components/Container/Container';
import {Content} from '../../Components/Content/Content';
import {Link} from 'react-router-dom'
import './notFound.scss'

function NotFound() {
    return (
        <main className="not-found">
            <Content>
                <Container>
                   <p className="explanation">Ooops!! Something went wrong. Go back to Earth</p>
                    <p className="button-wrap"><Link to="/" className="button button_earth">Go to Earth</Link></p>
                </Container>
            </Content>
        </main>
    )
}

export default NotFound;