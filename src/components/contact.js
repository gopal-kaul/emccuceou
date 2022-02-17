import { Container, Row, Col, Ratio } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <div style={{ marginTop: "5%", marginBottom: "5%" }}>
        <Row>
          <Col lg={5} mb={4}>
            <h2>
              <strong>Contact Us</strong>
            </h2>
            <h5>
              <strong>Mr. Gopal Kaul</strong>
            </h5>
            President, EMC²
            <br />
            +91 8074205633
            <br />
            music.uceou@gmail.com
            <br />
          </Col>
          <Col lg={7}>
            <div style={{}}></div>
            <br />
            <Ratio aspectRatio="1x1">
              <iframe
                title="Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.116329436644!2d78.51728491487663!3d17.406204088067316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb992a61089b8b%3A0x6860898df38073c0!2sEngineers&#39;%20Music%20and%20Cultural%20Club!5e0!3m2!1sen!2sin!4v1584853736672!5m2!1sen!2sin"
              />
            </Ratio>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
