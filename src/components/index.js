import { Carousel, Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/emcc-back.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/jam/3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Jam Session, 25th November 2021</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="main-text">
          <h2>EMC²</h2>
          <em>Osmania University's Music Club!</em>
          <br />
          <br />
          <br />
          <p>
            EMC², expanded as Engineers’ Music and Cultural Club, is Osmania
            University College of Engineering’s first official non-technical
            club, established in July 2018. The club aims towards building a
            conducive ecosystem for all the musicians and music lovers in the
            college to share their musical views and enhance their potential in
            whatever way possible. EMC² conducts regular jam sessions and Open
            Mic events to provide a platform for students to express themselves.
            “RAAGA: The Voice Hunt”, the annual music competition organized by
            the club, drew a lot of raw talent to the limelight and has given
            them exposure to take their passion forward. The official band of
            the club was formed last year; the band even took part in a couple
            of “Battle of Bands” events. Guitar classes are frequently held,
            where interested students are taught by members of the club itself.
            Members of the club actively participated in cultural events in the
            college on quite a few occasions like the “Global Alumni Meet, 2019”
            and the university’s former Vice Chancellor Prof. S Ramachandram’s
            retirement ceremony - justifying the club’s premise of existing as a
            cultural forum as well.
          </p>
        </div>
        <Row xs={1} md={1} lg={4}>
          <Col style={{ marginTop: "5%", marginBottom: "5%" }}>
            <Link to="/faculty">
              {" "}
              <Image
                className="img-shadow index-photo"
                style={{ padding: "5px" }}
                src="images/faculty.jpeg"
                alt="Faculty"
                width={200}
                height={200}
                roundedCircle
                fluid
              />
            </Link>
          </Col>
          <Col style={{ marginTop: "5%", marginBottom: "5%" }}>
            <h3>Message from the Faculty Advisor</h3>
            <em>Dr. V. Uma Maheshwar</em>
          </Col>
          <Col style={{ marginTop: "5%", marginBottom: "5%" }}>
            <Link to="/president">
              {" "}
              <Image
                className="img-shadow index-photo"
                src="images/president.jpeg"
                alt="president"
                width={200}
                height={200}
                roundedCircle
                fluid
              />
            </Link>
          </Col>
          <Col style={{ marginTop: "5%", marginBottom: "5%" }}>
            <h3>Message from the President</h3>
            <em>Gopal Kaul</em>
          </Col>
        </Row>
      </Container>
    </>
  );
}
