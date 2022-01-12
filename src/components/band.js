import React from "react";
import { Container, Image, Carousel } from "react-bootstrap";
export default function band() {
  return (
    <Container style={{ marginTop: "2%", marginBottom: "5%" }}>
      <h1>The Jesters</h1>
      <hr />
      <Carousel fade>
        <Carousel.Item>
          <Image className="w-100" src={"images/band/1.jpg"} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="w-100" src={"images/band/2.jpg"} />
        </Carousel.Item>
      </Carousel>
      <p style={{ marginTop: "2%" }}>
        <strong>THE JESTERS</strong> is the band of EMC². They have performed on
        multiple occasions and in various institutions. <br />
        Some of their recent performances are:
        <ul>
          <li> Amusant 2k19 </li>
          <li>Global Alumni Meet 2019</li>
          <li>Farewell of former vice chancellor </li>
          <li>National Institute of Fashion Technology </li>
          <li>Mahindra Ecole Centrale</li>
        </ul>
      </p>
    </Container>
  );
}
