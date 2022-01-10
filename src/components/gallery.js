import React from "react";
import { Carousel } from "react-bootstrap";

export default function Gallery() {
  return (
    <div>
      <h1>Gallery Page</h1>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/logo.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/raaga.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
