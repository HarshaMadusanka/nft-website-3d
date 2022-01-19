import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@google/model-viewer";
import { Header } from "../header/Header";
import "./About.css";
import modelfile from "./apartment.glb";

export const About = () => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col md={7}>
            <model-viewer
              disable-zoom
              src={modelfile}
              camera-controls
              auto-rotate
              class="modelviewer__about"
            ></model-viewer>
          </Col>
          <Col md={5}>
            <div className="about__desc">
              <h2>About Us</h2>
              <h3>
                HISTORY ABOUT 3D <br /> ARCHITECTURE METAVERSE
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Pellentesque sollicitudin elit egestas, malesuada <br />
                libero ac, aliquet ligula. Integer sit amet dolor nunc. <br />
                Duis fringilla leo id vestibulum mattis. Vestibulum pelle <br />
                ntesque ac elit a pellentesque. Suspendisse ac ulla <br />
                mcorper sem. Etiam a tincidunt tellus, at molestie sapien.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
