import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";

export default function Gallery() {
  return (
    <Container fluid>
      <h1>Gallery Page</h1>
      <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/logo.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/jam/3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
