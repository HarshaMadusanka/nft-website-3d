import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '@google/model-viewer';
import {Header} from '../header/Header';
import './Home.css';
import modelfile from './apartment.glb';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook , faDiscord, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export const Home = () => {
    return (
        <section className="home">
            <Header />
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="home__desc">
                        <h1>WELCOME TO <br/> 3D META <br/> UNIVERSE</h1>
                        <p>We create 3D NFT Properties which you can place <br/> on a Decentraland plot or Sandbox plot. Decentraland <br/> Property has greater ambitions and NFT holders <br/> will be participants in this journey.</p>
                        <button>Discord</button>
                        <button>Connect</button>
                        </div>
                    </Col>
                    <Col md={7}>
                    <model-viewer disable-zoom src={modelfile} camera-controls auto-rotate class="modelviewer"></model-viewer>
                    </Col>
                </Row>
            </Container>
            <div className="social__media__links">
                <ul>
                    <li><FontAwesomeIcon icon={faFacebookF}/> </li>
                    <li><FontAwesomeIcon icon={faDiscord}/> </li>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                </ul>
            </div>
        </section>
    )
}
