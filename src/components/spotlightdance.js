import React from "react";
import { Card, Image, Container, Row, Col } from "react-bootstrap";
export default function SpotlightDangers() {
  return (
    <Container style={{ marginTop: "2%", marginBottom: "2%" }}>
      <h1>Spotlight (Dancers)</h1>
      <hr />
      <p style={{ fontSize: "1.25rem" }}>
        Here are a few famous dancers to keep an eye out for in college events
        and performances!
      </p>
      <div className="card-centre">
        <Row className="align-items-center">
          <Col>
            <Card style={{ margin: 5 }}>
              <Image
                variant="top"
                className="img-shadow index-photo"
                src="images/dancers/ruthvik.webp"
                width={200}
                height={200}
                style={{ marginTop: "2%", marginLeft: "2%" }}
                roundedCircle
                fluid
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "25px" }}>Ruthvik H</Card.Title>
                <Card.Text>
                  The first time I ever performed on stage was for a girl, SV,
                  that's what I used to call her.She was in 9th standard while I
                  was in my 10th.I somehow convinced my friend Vamshi into
                  teaching me few steps, he and I went on the stage and killed
                  it, and it actually helped me to draw her attention.Yeah!
                  that's the beginning, from then on whenever I feel like
                  impressing or get noticed by someone, I just jump on the stage
                  and dance,worked every time!They come back to me and say
                  'dance baa chesinav' and that's how our convo starts...and if
                  I dance, it's for sure that I'm doing it to get noticed by
                  someone.
                  <br />
                  To be honest, I never actually admired any dancer, but I
                  really wanna master MJ's iconic movements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2}>
            <Image src="images/gifs/music4.gif" width={200} height={200} />
          </Col>
        </Row>
      </div>
      <div className="card-centre">
        <Row className="align-items-center">
          <Col lg={2}>
            <Image src="images/gifs/music5.gif" width={200} height={200} />
          </Col>
          <Col>
            <Card style={{ margin: 5 }}>
              <Image
                variant="top"
                className="img-shadow index-photo"
                src="images/dancers/lohith.webp"
                width={200}
                height={200}
                style={{ marginTop: "2%", marginLeft: "2%" }}
                roundedCircle
                fluid
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "25px" }}>Lohith</Card.Title>
                <Card.Text>
                  I was in my 1st grade when my teacher made me stand in the
                  first row to dance for the annual day, and I had no idea if I
                  could dance or not . I was made to dance at every school event
                  after that , from assemblies to annual days . In 2nd class, I
                  stood second in a dance competition, this is where I developed
                  an interest in dancing. So, from then I started to dance for
                  all of the school’s events.
                  <br />
                  Later,here in college I found friends who enjoy dancing .With
                  the help of EMC² I got to perform in many events.
                  <br />I really like the dances of Ram Charan.The kind of hard
                  work he puts in really amazes me.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="card-centre">
        <Row className="align-items-center">
          <Col>
            <Card style={{ margin: 5 }}>
              <Image
                variant="top"
                className="img-shadow index-photo"
                src="images/dancers/aniral.webp"
                width={200}
                height={200}
                style={{ marginTop: "2%", marginLeft: "2%" }}
                roundedCircle
                fluid
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "25px" }}>Aniral Rao</Card.Title>
                <Card.Text>
                  I started my engineering dance journey in the Induction
                  program, and continued to dance for almost all the events in
                  the college ever since. I find myself very happy when I dance
                  on the stage.
                  <br />
                  My favourite dancers are Prabhu Deva and Allu Arjun
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2}>
            <Image src="images/gifs/music8.gif" width={200} height={200} />
          </Col>
        </Row>
      </div>
      <div className="card-centre">
        <Row className="align-items-center">
          <Col lg={2}>
            <Image src="images/gifs/music7.gif" width={200} height={200} />
          </Col>
          <Col>
            <Card style={{ margin: 5 }}>
              <Image
                variant="top"
                className="img-shadow index-photo"
                src="images/dancers/ragini.webp"
                width={200}
                height={200}
                style={{ marginTop: "2%", marginLeft: "2%" }}
                roundedCircle
                fluid
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "25px" }}>
                  Ragini Kaul
                </Card.Title>
                <Card.Text>
                  Like no-one knows what words they spoke first, the dance was
                  my first language. I can’t remember how old I was when I
                  started dancing, however, my mother told me how any melody had
                  me dancing when I was a toddler. I was a born performer by
                  nature. Whenever I used to listen to any peppy number, I
                  danced. I learned most of my dancing moves from music videos
                  and TV. It was something I never considered doing
                  professionally but something that just brought me joy. I
                  remember my first dance performance was in Navratri Garba
                  event, when I was 5. Gradually, I started participating in
                  school dance competitions and functions which gave me my first
                  taste of classical folk-dance styles such as Rajasthani folk
                  dance (ghoomar and kalbeliya), bhangra, garba and kathak. I
                  Continued dancing as a dance major at many college events.
                  Throughout my college life I can say that I have expanded my
                  knowledge of dance and dance techniques. Dance is always like
                  a therapy to me, and after a long day of work, it feels
                  comforting to have dance sessions and practices to express
                  myself and exert my energy into something positive. Dancing
                  has taught me to be patient and to continue even though when
                  it is hard or it hurts and also to be the best in everything I
                  do, or try my best every time. I pray that everyone shall find
                  their soul in something like my soul found its therapy and
                  home in dance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
