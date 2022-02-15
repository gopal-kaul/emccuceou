import { Container, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
export default function Committee() {
  const [text, setText] = useState("");
  return (
    <button
      className="resetbutton"
      onClick={() => {
        text !== "" && setText("");
      }}
    >
      <Container>
        <div
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <h2>
            <strong>EMC² Core Committee</strong>
          </h2>
          <hr />
          <Row xs={2} md={4} lg={4}>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "gopal" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) => (state === "gopal" ? "" : "gopal"));
                    }}
                  >
                    <Image
                      src="images/president.webp"
                      className="img-shadow"
                      alt="president"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                    />
                  </button>
                  <h3 className="title">Gopal Kaul</h3>
                  <h5 className="role">President</h5>
                </div>
                {text === "gopal" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "niharika" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "niharika" ? "" : "niharika"
                      );
                    }}
                  >
                    <Image
                      src="images/niharika.webp"
                      className="img-shadow"
                      alt="secretary"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Musuku Niharika</h3>
                  <h5 className="role">Secretary</h5>
                </div>
                {text === "niharika" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "shiney" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) => (state === "shiney" ? "" : "shiney"));
                    }}
                  >
                    <Image
                      src="images/shiney.webp"
                      className="img-shadow"
                      alt="vice president"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Chinthamalla Shiney</h3>
                  <h5 className="role">Vice President</h5>
                </div>
                {text === "shiney" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "supriya" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "supriya" ? "" : "supriya"
                      );
                    }}
                  >
                    <Image
                      src="images/supriya.webp"
                      className="img-shadow"
                      alt="cultural head"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                    />
                  </button>
                  <h3 className="title">Supriya Rathod</h3>
                  <h5 className="role">Cultural Head</h5>
                </div>
                {text === "supriya" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "aniral" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) => (state === "aniral" ? "" : "aniral"));
                    }}
                  >
                    <Image
                      src="images/aniral.webp"
                      className="img-shadow"
                      alt="band leader"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Aniral Rao</h3>
                  <h5 className="role">Band Leader</h5>
                </div>
                {text === "aniral" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "manaswini" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "manaswini" ? "" : "manaswini"
                      );
                    }}
                  >
                    <Image
                      src="images/manaswini.webp"
                      className="img-shadow"
                      alt="treasurer"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Annimalla Manaswini</h3>
                  <h5 className="role">Treasurer</h5>
                </div>
                {text === "manaswini" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "hasitha" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "hasitha" ? "" : "hasitha"
                      );
                    }}
                  >
                    <Image
                      className="img-shadow"
                      src="images/hasitha.webp"
                      alt="immediate past president"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Krishna Hasitha</h3>
                  <h5 className="role">Immediate Past President</h5>
                  {text === "hasitha" && (
                    <p className="committee-desc">
                      This is how it'll look if I enter just one or two lines of
                      text. I think this fine, not excessive, right?
                    </p>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <h2>
            <strong>EMC² Executive Committee</strong>
          </h2>
          <hr />
          <Row xs={2} md={4} lg={4}>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "abdul" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) => (state === "abdul" ? "" : "abdul"));
                    }}
                  >
                    <Image
                      className="img-shadow"
                      src="images/abdul.webp"
                      alt="promotions"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                    />
                  </button>
                  <h3 className="title">Abdul Ghani</h3>
                  <h5 className="role">Promotions Head</h5>
                </div>
                {text === "abdul" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "hussain" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "hussain" ? "" : "hussain"
                      );
                    }}
                  >
                    <Image
                      className="img-shadow"
                      src="images/hussain.webp"
                      alt="graphic designer"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Hussain Shaik</h3>
                  <h5 className="role">Graphic Designer</h5>
                </div>
                {text === "hussain" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "kranthi" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "kranthi" ? "" : "kranthi"
                      );
                    }}
                  >
                    <Image
                      className="img-shadow"
                      src="images/kranthi.webp"
                      alt="assistant band leader"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Kranthi Kiran </h3>
                  <h5 className="role">Assistant Band Leader</h5>
                </div>
                {text === "kranthi" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "abhinava" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "abhinava" ? "" : "abhinava"
                      );
                    }}
                  >
                    <Image
                      className="img-shadow"
                      src="images/abhinava.webp"
                      alt="joint treasurer"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                    />
                  </button>
                  <h3 className="title">Abhinava Karthikeya</h3>
                  <h5 className="role">Joint Treasurer</h5>
                </div>
                {text === "abhinava" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "keerthana" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) =>
                        state === "keerthana" ? "" : "keerthana"
                      );
                    }}
                  >
                    <Image
                      src="images/keerthana.webp"
                      className="img-shadow"
                      alt="joint cultural head"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Keerthana Reddy </h3>
                  <h5 className="role">Joint Cultural Head</h5>
                </div>
                {text === "keerthana" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "lahari" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) => (state === "lahari" ? "" : "lahari"));
                    }}
                  >
                    <Image
                      className="img-shadow"
                      src="images/lahari.webp"
                      alt="content writer"
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Battu Lahari </h3>
                  <h5 className="role">Content Writer</h5>
                </div>
                {text === "lahari" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "rohit" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) => (state === "rohit" ? "" : "rohit"));
                    }}
                  >
                    <Image
                      src="images/rohit.webp"
                      className="img-shadow"
                      alt="joint secretary "
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Rohit Nittala</h3>
                  <h5 className="role">Joint Secretary</h5>
                </div>
                {text === "rohit" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
          </Row>
          <hr />
          <Row xs={2} md={4} lg={4}>
            <Col>
              <div className="mycont">
                <div
                  className={`${
                    text !== "nathan" && text !== "" ? "background-blur" : ""
                  }`}
                >
                  <button
                    className="committee-btn"
                    onClick={() => {
                      setText((state) => (state === "nathan" ? "" : "nathan"));
                    }}
                  >
                    <Image
                      src="images/special/nathan.webp"
                      className="img-shadow"
                      alt="joint secretary "
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                      fluid
                    />
                  </button>
                  <h3 className="title">Nathan Thadmalla</h3>
                  <h5 className="role">Senior Advisor</h5>
                </div>
                {text === "nathan" && (
                  <p className="committee-desc">
                    This is how it'll look if I enter just one or two lines of
                    text. I think this fine, not excessive, right?
                  </p>
                )}
              </div>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </button>
  );
}
