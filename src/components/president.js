import { Image, Container } from "react-bootstrap";

export default function President() {
  return (
    <Container className="my-5">
      <div
        className="center-image"
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <Image
          src="images/president.webp"
          className="person-image"
          roundedCircle
          fluid
          width={450}
          height={450}
        />
      </div>
      <div className="text-center">
        <em style={{ fontSize: "3em" }}>Gopal Kaul</em>
      </div>
      <p style={{fontSize:"1.5rem"}}>
        Engineers' Music And Cultural Club is the largest non-technical club in
        the college, and I am very grateful that I have been given the golden
        opportunity of being the club's President and entrusted with this
        responsibility. The club has grown exponentially since my first year.
        From 5 in a Jam Session to 80, from 50 in an Open Mic to 400, the
        importance of the Club in the college has been ever-increasing. I have
        been very proud of where the Club is today, and I hope it grows with the
        same rate forever. Our Principal has been very supporting. He got our
        room repaired and renovated, and he has been super supportive in all the
        events we have organised.
        <br />
        <br />
        I've always been interested in music. I am a self-learned Guitar player
        and I've been playing since the past 5 years now. Music is always a part
        of what I do. Some of the artists whose music really moves and
        influences me are Ed Sheeran, Shawn Mendes, The Beatles, Queen and
        Avicii!
        <br />
        <br />I hope to see the Club achieve a lot more in the coming years!
      </p>
    </Container>
  );
}
