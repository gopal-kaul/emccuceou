import React, { useState } from "react";
import Modal from "react-modal";
import { Card, Image, Container, Row, Col } from "react-bootstrap";
export default function Specialmentions() {
  const [more, setMore] = useState({});
  const special = [
    {
      name: "D L Prachotan",
      image: "images/special/prachotan.webp",
      info: "D L Prachotan is a professional carnatic vocalist and a performing artist. At a mere age of 3, Prachotan started identifying carnatic music ragas and has entered the Limca Book of World Records in the year 2003 for identifying 144 ragas. ",
      readmoreinfo: `Initially he has learned carnatic music from his mother D Sirisha and currently is under the tutelage of Sri. D Raghavachary garu since the past 12 years. He’s been performing at various sabhas across the nation which includes reputed sabhas such as Sri Parthasaradhi Swamy sabha, Indian Fine Arts and Sri Shanmukhananda sabha. He has also sung in JAYA TV’s Bala Bruhmmam in the years 2010 and 2011.
He has received around 25 national and 50 state level awards including the coveted ones like Bala Ratna, Bala Surya and Samaikya Bhaarath Gaurav Sathkaar. Prachotan has been a CCRT scholar from the year 2010 and has been awarded the “Sri Shanmukhananda Bharat Ratna M S Subbulaxmi fellowship” by the esteemed Sri Shanmukhananda sabha in September 2017. Prachotan is a founding member of Engineers’ Music & Cultural Club and is serving as its Vice President.
Prachotan has represented India in the Global Entreprenuership Bootcamp held in Jakarta, Indonesia and has also been the Co-Organizer of the first edition of TEDxOsmaniaU.`,
    },
    {
      name: "A S Sarthak",
      image: "images/special/sarthak.webp",
      info: "A S Sarthak has professionally learnt Tabla for 5 years and subsequently developed a good ear for it. His ardent passion towards music drove him to learn guitar and vocals on his own. He has performed on numerous occasions on Tabla and Guitar right from an early age.",
      readmoreinfo: `He has given many musical performances in the college’s cultural events.Right from the first year, Sarthak has been responsible for all cultural activities in various fests like Amusant and Infinity. He was the cultural head for Amusant 2018. Sarthak has been associated with many fests and has held multiple positions of responsibilities in events like Amusant, TEDxOsmaniaU and Under 25 Summit. He was chosen to be one of the licensee of Under 25 summit, being in the top 100 out of 6000 applicants who applied across the nation. Sarthak is a founding member of EMC2 and served as Treasurer in its first year and is currently serving as President. He’s been one of the root causes for the change in fortunes of the club. He has taken up new initiatives such as starting open mics and strengthening the club’s stand of being a cultural forum too. The club now has a confined space and a website as well. Sarthak attended the National Students Parliament organized by the Kerala Legislative Assembly and had the privilege of being one of the student speaker among 100s of applicants.`,
    },
    {
      name: "M V Sudhanshu",
      image: "images/special/sudhanshu.webp",
      info: "M V Sudhanshu has been learning Carnatic music from 12 years. He can also play various instruments like Harmonium, Piano and Congo. He was awarded as the best outgoing student in singing from DAV Public School. He has given number of performances in Tyagaraya Ganasabha on various religious events and festivals.",
      readmoreinfo: `A multi-talented musician, Sudhanshu is known as one of the best singers of the college and has won many singing competitions in and around the city. He is the 1st runner up of Voice of Hyderabad in the year 2019 and received the award from Indian Idol winner L V Revanth. Sudhanshu is the 1st runner up of the first and second edition of Raaga in the Indian category.`,
    },
    {
      name: "Vaishnavi Danam",
      image: "images/special/vaishnavidanam.webp",
      info: "Vaishnavi Danam is a professional carnatic vocalist. She has been learning carnatic vocal since the age of 4. She holds a diploma in the same and has performed for a number of national and international conferences that have taken place in Osmania University including Seminar of Scientific Glass Blowers and 62nd congress ISTAM.",
      readmoreinfo:
        "Besides being a singer, she is also a Kuchipudi Dancer and a Yoga practitioner. Vaishnavi has bagged the highest package of 23LPA in placements for the year 2019-20 in Commvault.",
    },
    {
      name: "Nathan Arul Thadmalla",
      image: "images/special/nathan.webp",
      info: "Nathan Arul Thadmalla started singing at the age of 5 and has been heavily influenced by great musicians like John Mayer, Kurt Cobain, Zayn, The Beatles and Johnny Cash. His roots of music are linked with churches. His passion for music slowly grew into poetry and song-writing. He hosted his first ever show on 8th of February, 2020 where he performed his original compositions for the first time for public.",
      readmoreinfo:
        "As an Executive Committee member of EMC², Nathan has been very active with the club activities and has initiated the idea of Open Mics which went on to be great success. Nathan has written over 12 songs and will soon be releasing them.",
    },
    {
      name: "Akhila Munnaluru",
      image: "images/special/akhila.webp",
      info: "I was introduced to the amazing world of music quite early in my life. My first teacher was my mother. I started learning Carnatic classical music from her since the age of three. Though I loved singing and lost the sense of the world everytime I sang, I felt uncomfortable in crowd. I was quite shy and was very reluctant to sing when people were around. This changed in my third standard when I participated in the All India Music Competitions for the first time.",
      readmoreinfo:
        "I was quite nervous and was too young to handle the pressure, midst the song my mind felt blank and my lips went numb, I couldn't complete my song and was not awarded any marks that year. However, it was the most memorable moment. It thought me what pressure was capable of doing. I went back the following year only to win the first prize.That prize took the confidence in me to next level and what followed after was string of prizes in competitions until my tenth class. Hectic academic schedule and never ending weekend tests made sure I wouldn't take music classes anymore atleast for next 2 years. Fast forward to engineering, I resumed my journey and started learning from Shri Kyvalya Kumar Garu, under whom I have cleared the Certificate course in music with distinction. For the year 2020-21 I served as the general secretary for the college music club EMC². Even after being 15 years into music, I am still curious and I wish to acquire as much musical knowledge as I can.",
    },
    {
      name: "Vaishnavi Gannoji",
      image: "images/special/vaishnavigannoji.webp",
      info: "Hey, I am Vaishnavi. Here is my story. My music journey started when I was in my second standard, my parents joined me in a music institute nearby my school because there was no one to look after me as both of them had a job, I eventually developed interest in carnatic music.",
      readmoreinfo:
        "I love listening to all kind of genres, melody being my favorite and music singers like Shreya Ghoshal, Sid Sriram and music directors like A.R. Rahman, M.M Keeravani made me love music even more with their mesmerizing work in the music industry.",
    },
    {
      name: "",
      image: "images/special/.webp",
      info: "",
      readmoreinfo: "",
    },
  ];
  return (
    <Container style={{ marginTop: "2%", marginBottom: "2%" }}>
      <h1>
        <strong>Special Mentions Page</strong>
      </h1>
      <hr />
      <p style={{ fontSize: "1.25rem" }}>
        These are some of the club's notable alumni who have carved a name for
        themselves with their outstanding achievements.
      </p>
      <div className="row">
        {special.map((member, idx) => (
          <div
            style={{ marginBottom: "3%" }}
            className="members-content"
            key={idx}
          >
            {member.name && (
              <Card>
                <Image
                  variant="top"
                  src={member.image}
                  className="img-shadow index-photo"
                  width={200}
                  height={200}
                  style={{ marginTop: "2%", marginLeft: "2%" }}
                  roundedCircle
                  fluid
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "25px", fontWeight: "bold" }}>
                    <h3>{member.name}</h3>
                  </Card.Title>
                  <Card.Text>
                    {member.info}
                    <button
                      onClick={() =>
                        setMore((more) =>
                          more.name === member.name ? {} : member
                        )
                      }
                      className="readmore-btn"
                    >
                      Read More ▼
                    </button>
                    <Modal
                      style={{
                        overlay: {
                          zIndex: 100,
                          marginTop: "10%",
                          marginLeft: "5%",
                          marginRight: "5%",
                        },
                      }}
                      ariaHideApp={false}
                      isOpen={Object.keys(more).length !== 0}
                      onRequestClose={() => setMore({})}
                      contentLabel="Modal with image"
                    >
                      <Card>
                        <Card.Header>
                          <Image
                            variant="top"
                            src={more.image}
                            className="img-shadow index-photo"
                            width={200}
                            height={200}
                            style={{ marginTop: "2%", marginLeft: "2%" }}
                            roundedCircle
                            fluid
                          />
                          <button
                            className="readmore-btn"
                            style={{ position: "absolute", right: "1%" }}
                            onClick={() => setMore({})}
                          >
                            ✖
                          </button>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title
                            style={{ fontSize: "25px", fontWeight: "bold" }}
                          >
                            <h3>{more.name}</h3>
                          </Card.Title>
                          <Card.Text>
                            {more.info}
                            {more.readmoreinfo}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Modal>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
