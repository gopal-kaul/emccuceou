import { Image, Container } from "react-bootstrap";

export default function President() {
  return (
    <Container>
      <div
        className="center-image"
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <Image
          src="images/president.jpeg"
          className="person-image"
          roundedCircle
          fluid
          width={450}
          height={450}
        />
      </div>
      <div className="text-center">
        <em>Gopal Kaul</em>
        <p>
          Engineers' Music And Cultural Club is the largest non-technical club
          in the college! I am very grateful to be the fourth president of the
          club!
        </p>
      </div>
      <div className="main-text"></div>
    </Container>
  );
}
