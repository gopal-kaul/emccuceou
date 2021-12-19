import { Image, Container } from "react-bootstrap";

export default function Faculty() {
  return (
    <>
      <Container>
        <div
          className="center-image"
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <Image
            src="images/faculty.jpeg"
            className="person-image"
            roundedCircle
            fluid
            width={450}
            height={450}
          />
        </div>
        <div className="text-center">
          <em>Dr. V. Uma Maheshwar</em>
        </div>
        <div className="main-text">Lorem Ipsum</div>
      </Container>
    </>
  );
}
