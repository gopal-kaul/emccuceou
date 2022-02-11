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
            src="images/faculty.webp"
            className="person-image img-shadow"
            roundedCircle
            fluid
            width={450}
            height={450}
          />
        </div>
        <div className="text-center">
          <em style={{ fontSize: "3em" }}>Dr. V. Uma Maheshwar</em>
          <br />
          <p style={{ fontSize: "1.5em", marginTop: "5%", marginBottom: "5%" }}>
            Osmania University has crossed a mile stone of 100 years and
            University College of Engineering, Osmania University, 90 years of
            their existence. Students joining University College of Engineering
            are multi talented and get admitted into the college after rigorous
            academic coaching regimes at Junior College level where they were
            given hardly any time to hone their non academic skills. The
            Engineers’ Music and Cultural Club (EMC²) is established to provide
            an inter-departmental common platform for students to exchange , and
            enrich on their Music skills, apart from exchanging views on varied
            cultures they are from. In order to achieve this, the club organizes
            various activities and instrumental classes every year. Among them,
            the annual Singing Competition called RAAGA is one of the most
            popular activities in our College that attracts many student of the
            College to take part in. The Club aims to provide opportunities for
            students with musical talents to perform through events like The
            Open Mic. The club also offers Music Shows at Department/College
            level Events on request. Overall, the Music Club is a friendly,
            vibrant unit that serves as an accessible, responsive and creative
            intellectual resource for the students and faculty /staff members.
            Music Club aims to identify and encourage the Music Talent among the
            students, nurture the talent in every member and provide a conducive
            environment for mutual learning. Each individual has something to
            offer and through mentorships, jams, competitions and events, the
            club strives to polish skills, share knowledge and spread musical
            joy. The club also encourages the club members for competitive
            participation in various music based events conducted inside and
            outside the campus. Last, but not the least. Students need not be
            Singers/Instrument players to take membership of the Club. If One
            has an interest to enjoy the music, she/he is Welcome to join the
            club !!
            <br />
            <br />
            <br />
            <strong>
              Dr. V. Uma Maheshwar
              <br />
              Faculty Advisor, EMC²
            </strong>
          </p>
        </div>
      </Container>
    </>
  );
}
