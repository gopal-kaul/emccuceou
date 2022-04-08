import React, { useState } from "react";
import Modal from "react-modal";
import { Card, Image, Container, Row, Col } from "react-bootstrap";
export default function SpotlightSingers() {
  const [more, setMore] = useState({});
  const singers = [
    {
      name: "Surabhi Nadigotti",
      image: "images/singers/surabhi.webp",
      info: "I started learning carnatic music vocals when I was 7. Back then, I wasn't really into music. But with time, I slowly started developing my interest towards it. Although I had to change my classical carnatic trainers for thrice and had to stop taking the training, I would still love to continue pursuing it.",
      readmoreinfo: `As a child, I didn't really understand the beauty of classical music, but on exploring other genres too growing up, I realised how rich and authentic classical carnatic music is! Apart from Carnatic music, I'd love listening to Sufi songs and Contemporary movie songs. My favourite artists include Ayushmaan Khurrana, Shreya Ghoshal, A.R. Rehman, Sid Sreeram, Rahul Vellal, Chinmayi Sripada, and many more. Coming to the western music, I don't know many artists, as I didn't discover my interests particularly here in the western. But so far, my favourites are- Taylor Swift, Avicii, and Chester Bennington.
Talking about my association with the club, I feel totally jubilant to have known the people of the club! It was always enthralling to sing along, rehearse and practice with these fabulous bunch of people! And, there was never a moment off!
Also, the amount of takeaways I had from being a part of sessions of the club, was really great! Because, when you practice with people you get to know enormous details, starting from the scale of the song to the very minute details like the vibrato!
EMCC has definitely helped me evolve as a better singer! P.S. I also, started learning to play the guitar and the keyboard (which I stopped learning in my 5th grade :/)`,
    },
    {
      name: "Abhinava Karthikeya",
      image: "images/singers/abhinav.webp",
      info: "My association with music is one of the turning points in my life. When I was a child I was bad at everything ( studies,sports etc). During my 4th standard there were few competitions in our school and I had to participate in it as it was compulsory for every one to participate in any one of them. I chose to participate in singing and I won second prize.",
      readmoreinfo: `This helped me to boost my confidence and improve myself. I am not a trained singer but I would love to learn carnatic music and piano. My favourite artists include Anurag Kulkarni, Sid Sriram, Sunitha , Arjith Singh and many more.
Emcc helped me a lot in improving my skills.It gave me a chance to perform in many events,chance to meet many good musicians and share the stage with them. I feel excited being part of emcc and looking forward to participating in more events.`,
    },
    {
      name: "Musuku Niharika",
      image: "images/niharika.webp",
      info: "It all started when I was in my first standard and my dad decided to engage me in a co-curricular activity. He introduced me to my neighbour who happens to be a music teacher. I started going to her classes which gradually made me realise my hidden interest in music.",
      readmoreinfo:
        "Eventually, I started performing in school and college level singing competitions improving myself but my only hurdle was stage fear. I couldn’t enjoy the song completely because of it and then i realised feeling every bit of the song helps me enjoy the song and also improve my performance. I admire a lot of music artists but Shreya Ghoshal and SP Balasubramaniam always stay on the top of that list.",
    },
    {
      name: "Shiney Sadanand",
      image: "images/shiney.webp",
      info: "My interaction with music happened when I was 11 year old.Younger me was very active and wanted to participate in every cultural competition happened in my school.So,I participated in a singing competition and won 2nd prize.I didn't know that I could sing until that very moment",
      readmoreinfo:
        "From then I used to take part in every event.My teachers were so supportive of me.I got a little bit worried whether I could carry on my hobby in my graduation,but yay! EMC² relieved me. EMC² didn't only support me but also improved my singing abilities and music taste.The kind off music I listen to would be pop.My favourite artists are Harry Styles,Zayn Malik,Taylor Swift,Dua Lipa .I enjoy listening to Sid Sriram,Arijit Singh and Atif Aslam too.With the help of EMC² I got a chance to perform in many events,along with other fellow singers and musicians.Now, as a committee member of EMC²,I'm looking forward to work with many more artists and refining their talents.We are happy to help.",
    },
    {
      name: "Kiran Ganji",
      image: "images/singers/kiran.webp",
      info: "Who doesn't love listening to music?!.. Even though I was a melophile from my childhood. I always used to listen to music and sing in front of my friends without knowing anything about music..just feeling the emotion of the song but I wasn't able to sing with that emotion. When I was in 6th standard, I saw one girl.",
      readmoreinfo: `She was so beautiful and smart as well. I don't know why..I used to feel happy around her. Gradually I fell in love with her. But I didn't have the courage to tell her . So I thought I could express my feelings through music. So I started exploring music and really enjoyed learning little basics .I sang "Naalone pongenu narmada" for her. She loved it and appreciated me . I was on cloud nine. Finally I proposed to her in 10th standard but she told me that she loves someone else. That really destroyed me mentally. I went into depression.Well.. that helped me in one way. After that incident, I was able to sing with emotion. Many people appreciated my voice and my way of singing. She's the main reason behind the 'emotion' in my singing . So yeah!.. that's how I got into music and I'm loving learning it ! Thanks to my first love <3
My favourite artists are A.R.Rahman,G.V.Prakash,Armaan malik I listen to almost all genres of music cause I'm a melophile`,
    },
    {
      name: "Keerthana Reddy",
      image: "images/singers/keerthana.webp",
      info: "I was seven , when we moved to Gujarat. New place , new language , new culture but my love for the music stayed the same. I started learning hindustani music there and continued to do so until I moved to hyderabad. Though my music teacher taught me in gujarati , language was never a barrier for me to learn music.",
      readmoreinfo:
        "However, I lacked confidence to perform in front of an audience . I used to just sing in front of my mother, and she kept on forcing me to perform at family gatherings, but I always had an excuse. I've posted a few covers during the pandemic, and the response has boosted my confidence. Since then, I've been an active participant in emcc's events. I listen to a variety of genres but Sid Sriram's and Shawn Mendes songs are what I crave the most!.I'm looking forward to taking part in upcoming events, and I'll surely give it my all!",
    },
    {
      name: "Pratik",
      image: "images/singers/pratik.webp",
      info: "My mom made me join a guitar class for a few months but I learnt most of it in 2020 lockdown My favourite artists are The weeknd , Guns n Roses , maroon 5, one direction, kanye , future , migos , lil uzi vert , arijit singh. My music interests are Hiphop, R&b",
      readmoreinfo: "",
    },
    {
      name: "Shishira",
      image: "images/singers/shishira.webp",
      info: "Hey...! I am Shishira. Here is a short glimpse of my music journey. I initiated my musical journey from an early age of mine with the tunes of Carnatic music. To advance my musical interest, I had done a certificate course in Carnatic music from the prestigious Pottisreeramulu Telugu University. ",
      readmoreinfo: `I took part in carnatic concerts on the occasion of Sri Ramanavami and Thyagaraja Aradhana. I also extended my Carnatic music interest by participating in the bhajan Samrat event. I love Shreya Ghoshal's voice tone and singing style moving to the cinematic genre. I believe in a quote- 
      Music is the literature of the heart; it commences where speech ends. - Alphonse de Lamartine`,
    },
  ];
  return (
    <Container style={{ marginTop: "2%", marginBottom: "2%" }}>
      <h1>
        <strong>Spotlight (Singers)</strong>
      </h1>
      <hr />
      <p style={{ fontSize: "1.25rem" }}>
        Here are a few famous singers to keep an eye out for in college events
        and performances!
      </p>
      <div className="row">
        {singers.map((member, idx) => (
          <div
            key={idx}
            style={{ marginBottom: "3%" }}
            className="members-content"
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
                    {member.name}
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
