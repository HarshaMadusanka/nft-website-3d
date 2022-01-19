import React from "react";
import "@google/model-viewer";
import apartment from "./apartment.glb";
import iphone from "./iphone.glb";
import bitcoin from "./bitcoin.glb";
import voucher from "../../assets/images/voucher.png";
import { Col, Container, Row } from "react-bootstrap";
import "./Roadmap.css";
import {
  faHandPointRight,
  faHandPointLeft,
  faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Roadmap = () => {
  return (
    <section className="roadmap">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Roadmap</h2>
          </Col>

          <Col md={12}>
            <Row>
              <Col md={5}>
                <model-viewer
                  disable-zoom
                  src={apartment}
                  camera-controls
                  auto-rotate
                  class="modelviewer__roadmap"
                ></model-viewer>
              </Col>
              <Col md={2}>
                <FontAwesomeIcon icon={faHandPointLeft} className="hand" />
              </Col>
              <Col md={5}>
                <h3>
                  10<sup>th</sup> of November 2021{" "}
                </h3>
                <p>
                  {" "}
                  Mint on opensea.io Then list your NFT <br /> 3D property on
                  your Decentraland.org <br /> plot or estate
                </p>
              </Col>
            </Row>
          </Col>

            <Col md={6}>
                <FontAwesomeIcon icon={faAngleDoubleDown} className="down__arrow"/>
            </Col>

          <Col md={12}>
            <Row>
              <Col md={5}>
                <h3>@ 10% Minting</h3>
                <p>
                  25 free crypt course vouchers <br /> face to face meetups
                </p>
              </Col>
              <Col md={2}>
                <FontAwesomeIcon icon={faHandPointRight} className="hand" />
              </Col>
              <Col md={5}>
                <img src={voucher} width="40%" alt="" />
              </Col>
            </Row>
          </Col>

          <Col md={6}>
                <FontAwesomeIcon icon={faAngleDoubleDown} className="down__arrow"/>
            </Col>

          <Col md={12}>
            <Row>
              <Col md={5}>
                <model-viewer
                  disable-zoom
                  src={iphone}
                  camera-controls
                  auto-rotate
                  class="modelviewer__roadmap__iphone"
                ></model-viewer>
              </Col>
              <Col md={2}>
                <FontAwesomeIcon icon={faHandPointLeft} className="hand" />
              </Col>
              <Col md={5}>
                <h3>@ 30% Minting</h3>
                <p>5 x Iphone 12’s</p>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
                <FontAwesomeIcon icon={faAngleDoubleDown} className="down__arrow"/>
            </Col>

          <Col md={12}>
            <Row>
              <Col md={5}>
                <h3>@ 50 Minting</h3>
                <p>1 x Bitcoin</p>
              </Col>
              <Col md={2}>
                <FontAwesomeIcon icon={faHandPointRight} className="hand" />
              </Col>
              <Col md={5}>
                <model-viewer
                  disable-zoom
                  src={bitcoin}
                  camera-controls
                  auto-rotate
                  class="modelviewer__roadmap__bitcoin"
                ></model-viewer>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
                <FontAwesomeIcon icon={faAngleDoubleDown} className="down__arrow"/>
            </Col>

          <Col md={12}>
            <Row>
              <Col md={5}>
                <model-viewer
                  disable-zoom
                  src={apartment}
                  camera-controls
                  auto-rotate
                  class="modelviewer__roadmap"
                ></model-viewer>
              </Col>
              <Col md={2}>
                <FontAwesomeIcon icon={faHandPointLeft} className="hand" />
              </Col>
              <Col md={5}>
                <h3>@ 100% Minting</h3>
                <p>
                  {" "}
                  Upon 100% NFT sales, we will acquire a land <br /> plots in
                  the Decentraland and Sandbox Metaverses. <br/> 10 x Lucky NFT
                  holders will get to own 49% of 1 full <br/> plot of land. The
                  remaining land and 51% will be owned <br/> by the provider, who will
                  rent out the land and pay a <br/> distribution to all NFT holders,
                  quarterly or annually.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
