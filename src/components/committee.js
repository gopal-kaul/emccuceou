import { Container, Image, Row, Col } from "react-bootstrap";

export default function Committee() {
  return (
    <Container>
      <div style={{ marginTop: "5%", marginBottom: "5%" }}>
        <h2>EMC² Core Committee</h2>
        <hr />
        <Row xs={2} md={4} lg={4}>
          <Col>
            <div className="mycont">
              <Image
                src="images/president.jpeg"
                className="img-shadow"
                alt="president"
                width={"70%"}
                height={"70%"}
                roundedCircle
              />
              <h3>Gopal Kaul</h3>
              <h5>President</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                src="images/niharika.jpg"
                className="img-shadow"
                alt="secretary"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Musuku Niharika</h3>
              <h5>Secretary</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                src="images/shiney.jpg"
                className="img-shadow"
                alt="vice president"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Chinthamalla Shiney</h3>
              <h5>Vice President</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                src="images/supriya.jpg"
                className="img-shadow"
                alt="cultural head"
                width={"70%"}
                height={"70%"}
                roundedCircle
              />
              <h3>Supriya Rathod</h3>
              <h5>Cultural Head</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                src="images/aniral.jpg"
                className="img-shadow"
                alt="band leader"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Aniral Rao</h3>
              <h5>Band Leader</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                src="images/manaswini.jpg"
                className="img-shadow"
                alt="treasurer"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Annimalla Manaswini</h3>
              <h5>Treasurer</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                className="img-shadow"
                src="images/hasitha.jpg"
                alt="immediate past president"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Krishna Hasitha</h3>
              <h5>Immediate Past President</h5>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <h2>EMC² Executive Committee</h2>
        <hr />
        <Row xs={2} md={4} lg={4}>
          <Col>
            <div className="mycont">
              <Image
                className="img-shadow"
                src="images/abdul.jpeg"
                alt="promotions"
                width={"70%"}
                height={"70%"}
                roundedCircle
              />
              <h3>Abdul Ghani</h3>
              <h5>Promotions</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                className="img-shadow"
                src="images/hussain.jpg"
                alt="graphic designer"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Hussain Shaik</h3>
              <h5>Graphic Designer</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                className="img-shadow"
                src="images/kranthi.jpg"
                alt="assistant band leader"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Kranthi Kiran </h3>
              <h5>Assistant Band Leader</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                className="img-shadow"
                src="images/abhinava.jpg"
                alt="joint treasurer"
                width={"70%"}
                height={"70%"}
                roundedCircle
              />
              <h3>Abhinava Karthikeya</h3>
              <h5>Joint Treasurer</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                src="images/keerthana.jpg"
                className="img-shadow"
                alt="joint cultural head"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Keerthana Reddy </h3>
              <h5>Joint Cultural Head</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                className="img-shadow"
                src="images/lahari.jpg"
                alt="content writer"
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Battu Lahari </h3>
              <h5>Content Writer</h5>
            </div>
          </Col>
          <Col>
            <div className="mycont">
              <Image
                src="images/rohit.jpg"
                className="img-shadow"
                alt="joint secretary "
                width={"70%"}
                height={"70%"}
                roundedCircle
                fluid
              />
              <h3>Rohit Nittala</h3>
              <h5>Joint Secretary</h5>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
