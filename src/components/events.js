import React from "react";
import { Card, Container, Carousel, Image, Row, Col } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
export default function Events() {
  const openmic = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
  ];
  const raaga = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
  ];
  const jam = ["1.jpg", "2.jpg", "3.jpg"];
  const gettoknow = ["1.png", "2.png", "3.png"];
  return (
    <Container
      style={{ marginTop: "2%", marginBottom: "2%", scrollBehavior: "smooth" }}
    >
      <ScrollToTop smooth style={{ borderRadius: "50%" }} />
      <h1>Events Page</h1>
      <hr />
      <p style={{ fontSize: "1.5rem" }}>
        These are a few memories from our college events!
      </p>
      <div className='eventbar'>
      <Row>
        <Col>
          <div className="eventlink">
            <a className="eventref" href="#openmic">
              Open Mic
            </a>
          </div>
        </Col>
        <Col>
          <div className="eventlink">
            <a className="eventref" href="#raaga">
              RAAGA
            </a>
          </div>
        </Col>
        <Col>
          <div className="eventlink">
            <a className="eventref" href="#jam">
              Jam Session
            </a>
          </div>
        </Col>
        <Col>
          <div className="eventlink">
            <a className="eventref" href="#gettoknow">
              Get to Know
            </a>
          </div>
        </Col>
      </Row>
      </div>
      <section id="openmic">
        <Card style={{ marginTop: "3%" }}>
          <Carousel fade>
            {openmic.map((item, idx) => {
              return (
                <Carousel.Item>
                  <Image
                    id={idx}
                    className="w-100 d-block"
                    src={`images/openmic/${item}`}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>Open Mic</Card.Title>
            <Card.Text>
              There are days when you just want to perform rather than compete.
              You simply want everyone to listen to your music or admire your
              dance or just read a poem in front of a live audience or just rap
              to your favourite song and see what others do and just enjoy their
              expression of art; that is exactly what Open Mic does! No
              competition and No Judgement.
              <br />
              Open Mic is an event conducted by our EMC² in collaboration with
              YOUVA (an NGO club). In Open mic students perform their interests
              and the funds collected through this event goes to the charity!.
              This year EMC² successfully hosted its third open mic in
              collaboration with youva where almost 60 students performed! With
              a live audience of 500 members.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section id="raaga">
        <Card style={{ marginTop: "3%" }}>
          <Carousel fade>
            {raaga.map((item, idx) => {
              return (
                <Carousel.Item>
                  <Image
                    id={idx}
                    className="w-100 d-block"
                    src={`images/RAAGA/${item}`}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>RAAGA</Card.Title>
            <Card.Text>
              RAAGA is an annual competition conducted by EMC² to promote
              upcoming singers in the University. It is a competition where
              singers from all the departments compete against one title. This
              is an event where the members of EMC² participate in two different
              categories Classic and Western. The event will be judged by
              renowned musicians who already have a say in the music industry
              and the winners of this event will be the lead singer of the EMC²
              band "The Jesters". EMC² has been conducting this event
              successfully for three years and the number of participants keeps
              increasing.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section id="jam">
        <Card style={{ marginTop: "3%" }}>
          <Carousel fade>
            {jam.map((item, idx) => {
              return (
                <Carousel.Item>
                  <Image
                    id={idx}
                    className="w-100 d-block"
                    src={`images/jam/${item}`}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>Jam Session</Card.Title>
            <Card.Text>
              Who doesn't enjoy an evening full of music, jamming to songs,
              meeting new people! Isn't it what a melophile craves for?Ever
              desire to experience a personalized concert where you may sing
              along to your favourite songs sung by professional singers? then
              jam sessions are for you!
              <br />
              EMC² conducted its latest jam session on 25.11.2021. More than 100
              voices sang together along with the singers and made this event as
              Osmania University's very own concert!
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section id="gettoknow">
        <Card style={{ marginTop: "3%" }}>
          <Carousel fade>
            {gettoknow.map((item, idx) => {
              return (
                <Carousel.Item>
                  <Image
                    id={idx}
                    className="w-100 d-block"
                    src={`images/gettoknow/${item}`}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>
              Get to know EMC²
            </Card.Title>
            <Card.Text>
              Get to know EMC² is an event conducted to introduce the club to
              all the first years. Many students who are new to college wouldn’t
              know much about the events and clubs in the college. hence we want
              to make each and every newcomer feel like they have a safe place
              to share their cultural interests. We are certain that we have
              created that space among all our juniors.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
}
