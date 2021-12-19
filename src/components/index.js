import { Button, Carousel, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <>
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
      <Container>
        <div className="main-text">
          <h3>EMC²</h3>
          <p>
            <em>Osmania University's Music Club!</em>
          </p>
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
        <div className="row" style={{ marginTop: "5%", marginBottom: "5%" }}>
          <div className="col-lg-6 col-md-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mx-auto">
                  <Link to="/faculty">
                    {" "}
                    <Image
                      src="images/faculty.jpeg"
                      alt="Faculty"
                      width={200}
                      height={200}
                      roundedCircle
                      fluid
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <h3>Message from the Faculty Advisor</h3>
                <p>
                  <em>Dr. V. Uma Maheshwar</em>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mx-auto">
                  <Link to="/president">
                    {" "}
                    <Image
                      src="images/president.jpeg"
                      alt="president"
                      width={200}
                      height={200}
                      roundedCircle
                      fluid
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <h3>Message from the President</h3>
                <p>
                  <em>Gopal Kaul</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
