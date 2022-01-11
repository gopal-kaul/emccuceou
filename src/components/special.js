import React from "react";
import { Card, Image, Container } from "react-bootstrap";
export default function Specialmentions() {
  return (
    <Container style={{ marginTop: "2%", marginBottom: "2%" }}>
      <h1>Special Mentions Page</h1>
      <hr />
      <Card style={{ margin: 5 }}>
        <Image
          variant="top"
          src="images/special/nathan.jpg"
          width={200}
          height={200}
          style={{ marginTop: "2%", marginLeft: "2%" }}
          roundedCircle
          fluid
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "25px" }}>
            Nathan Arul Thadmalla
          </Card.Title>
          <Card.Text>
            I started singing like any average Christian child in church 😂.
            When I was in 11th grade I started writing poetry which slowly
            developed into me writing songs and my guitar journey started when I
            was 12 years old. Currently I had one show for my originals thanks
            to the music club, was the founder of the open mic in college and
            currently working on original music to be released soon . Apart from
            this I am also a part time guitar teacher
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
