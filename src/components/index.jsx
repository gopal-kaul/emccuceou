import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <>
      <Image
        className="d-block w-100"
        src="/images/emcc-back.webp"
        alt="First slide"
      />
      <Container style={{ marginTop: "3%", marginBottom: "5%" }}>
        <div style={{ textAlign: "center" }}>
          <h2>
            <strong>Engineers' Music and Cultural Club</strong>
          </h2>
          <i>Osmania University's Music Club!</i>
          <br />
          <br />
          <p style={{ fontSize: "1.5rem" }}>
            Engineers’ Music and Cultural Club or as we would like to call it
            EMC², is Osmania University College of Engineering’s first and
            largest official non-technical club, established in July 2018.
          </p>
          <hr />
        </div>
        <Row xs={1} md={2} lg={2}>
          <Col style={{ marginTop: "5%", marginBottom: "5%" }}>
            <div className="indexwrapper">
              <Link
                style={{ color: "#000000", textDecoration: "none" }}
                to="/faculty"
              >
                <Image
                  className="img-shadow index-photo"
                  style={{ padding: "5px" }}
                  src="images/faculty.webp"
                  alt="Faculty"
                  width={200}
                  height={200}
                  roundedCircle
                  fluid
                />
                <h3>Message from the Faculty Advisor</h3>
                <i style={{ fontSize: "1.25rem" }}>Dr. V. Uma Maheshwar</i>
              </Link>
            </div>
          </Col>
          <Col style={{ marginTop: "5%", marginBottom: "5%" }}>
            <div className="indexwrapper">
              <Link
                style={{ color: "#000000", textDecoration: "none" }}
                to="/president"
              >
                <Image
                  className="img-shadow index-photo"
                  src="images/president.webp"
                  alt="president"
                  width={200}
                  height={200}
                  roundedCircle
                  fluid
                />
                <h3>Message from the President</h3>
                <i style={{ fontSize: "1.25rem" }}>Gopal Kaul</i>
              </Link>
            </div>
          </Col>
        </Row>
        {/* <hr />
        <h3 style={{ textAlign: "center" }}>
          <strong>Quick Links</strong>
        </h3>
        <Row xs={1} md={2} lg={2}>
          <Col style={{ marginTop: "2.5%" }}>
            <div className="indexwrapper linkborder">
              <Link to="/events" className="linkreset">
                <h3>Events</h3>
              </Link>
            </div>
          </Col>
          <Col style={{ marginTop: "2.5%" }}>
            <div className="indexwrapper linkborder">
              <Link to="/aboutus" className="linkreset">
                <h3>About Us</h3>
              </Link>
            </div>
          </Col>
          <Col style={{ marginTop: "2.5%" }}>
            <div className="indexwrapper linkborder">
              <Link to="/band" className="linkreset">
                <h3>The Band</h3>
              </Link>
            </div>
          </Col>
          <Col style={{ marginTop: "2.5%" }}>
            <div className="indexwrapper linkborder">
              <Link to="/special" className="linkreset">
                <h3>Special Mentions</h3>
              </Link>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}
