import { Container, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
export default function Committee() {
  const [text, setText] = useState("");
  const core = [
    {
      name: "Gopal Kaul",
      title: "President",
      image: "images/president.webp",
      desc: "Gopal is the President of EMC² and the Lead Guitarist of the club’s band, “The Jesters”, and his contribution to the club has been exceptional in every sense. He is a self-learned guitarist who has participated in many EMC² events and has performed in NIFT Hyderabad’s Battle of Bands and Mahindra Ecole Centrale’s Inter College Competition. His enthusiasm and accountability are what make him the President of EMC².",
    },
    {
      name: "Musuku Niharika",
      title: "Secretary",
      image: "images/niharika.webp",
      desc: "Niharika was known as one of the best singers of EMC² long before she became the club's secretary. She is reliable, responsible and hardworking. She has participated in many EMC² competitions and won 3rd prize in RAAGA 2020. Her favourite artist is Shreya Ghoshal.",
    },
    {
      name: "Chinthamalla Shiney",
      title: "Vice President",
      image: "images/shiney.webp",
      desc: "Shiney is EMC²'s driving force, not just it’s vice president. If you have seen Shiney perform, you would know her voice is melodious and her energy is contagious. Shiney participated in many EMC² events. She is a prize-winner of RAAGA in 2020 and 2021. She also performed at a district-level singing competition and won 2nd prize in it. Besides singing, she is also talented on the keyboard.",
    },
    {
      name: "Supriya Rathod",
      title: "Cultural Head",
      image: "images/supriya.webp",
      desc: "",
    },
    {
      name: "Aniral Rao",
      title: "Band Leader",
      image: "images/aniral.webp",
      desc: "If anyone deserves to be the Band Leader at the EMC², it has to be Aniral. He is great with Drums, Guitar and experiments with many other instruments. He has participated in many competitions at EMC² and represented the band “The Jesters” in NIFT Hyderabad’s Battle of Bands.",
    },
    {
      name: "Annimalla Manaswini",
      title: "Treasurer",
      image: "images/manaswini.webp",
      desc: "",
    },
    {
      name: "Krishna Hasitha",
      title: "Immediate Past President",
      image: "images/hasitha.webp",
      desc: "Despite the Pandemic, Hasitha, the former EMC² President, kept the club active and thriving. She conducted many events online for the first time and made it an enormous success. She has performed at many EMC² events and even won the 2nd prize in RAAGA 2019. Having begun learning classical music in her intermediate, she has grown a lot since then. She has a calm, composed, and lively personality. It is a memorable experience to hear her sing.",
    },
    {
      name: "",
      title: "",
      image: "",
      desc: "",
    },
  ];
  const exec = [
    {
      name: "Abdul Ghani",
      title: "Promotions Head",
      image: "images/abdul.webp",
      desc: "",
    },
    {
      name: "Hussain Shaik",
      title: "Graphic Designer",
      image: "images/hussain.webp",
      desc: "",
    },
    {
      name: "Kranthi Kiran",
      title: "Assistant Band Leader",
      image: "images/kranthi.webp",
      desc: "Kranthi is the Guitarist and Assistant Band Leader of EMC²'s Band “The Jesters”. He enthusiastically participates in all EMC²'s events and listens to John Mayer, Nirvana and Pink Floyd. While you might not notice him around, when you see his performance, you will never forget it.",
    },
    {
      name: "Abhinava Karthikeya",
      title: "Joint Treasurer",
      image: "images/abhinava.webp",
      desc: "Abhinav is the Joint Treasurer of EMC² and one of the finest singers in the club. He says music made him gain confidence in life. He is just as sweet in person as his singing. He has participated in many EMC² competitions and won 2nd prize in RAAGA. As a performer and as a person, he is renowned for his patience and curiosity.",
    },
    {
      name: "Keerthana Reddy",
      title: "Joint Cultural Head",
      image: "images/keerthana.webp",
      desc: "Keerthana is the joint cultural head of EMC². It all started when she sang Bohemian Rapsody with her deep voice for the first time at EMC². Everyone was instantly captivated by her singing. She is undoubtedly a talented singer and a valuable team player. Whatever task is given to her, she makes sure it's done perfectly. She has participated in many EMC² competitions and won 3rd prize in RAAGA 2021.",
    },
    {
      name: "Battu Lahari",
      title: "Content Writer",
      image: "images/lahari.webp",
      desc: "Lahari is the content writer of EMC². Taylor Swift and her love for drums led her to join EMC². Her preciseness in writing is what makes her eloquent. She has always found EMC² to be a stress-buster despite being involved in many extracurricular activities.",
    },
    {
      name: "Rohit Nittala",
      title: "Joint Secretary",
      image: "images/rohit.webp",
      desc: "",
    },
    {
      name: "Nathan Thadmalla",
      title: "Senior Advisor",
      image: "images/special/nathan.webp",
      desc: "Nathan is a songwriter, singer, guitarist, poet, and an excellent performer. He began singing in his Church as a kid, and since then, his love for singing has never wavered. Nathan was a part of the first Core Committee and has participated in many EMC² events. He introduced the idea of Open Mic to the club. He won RAAGA 2019 and also had his own show in collaboration with the music club, showcasing his originals. In an “Anthology of Poems” published by a publishing house called “Writers Pocket”, he wrote a poem that was published.",
    },
  ];
  return (
    <Container>
      <div style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}>
        <h2>
          {(text === "" ||
            core.find((person) => {
              if (person.name === text) return true;
            })) && (
            <>
              <strong>EMC² Core Committee</strong>
              <hr />
            </>
          )}
        </h2>
        <div className="row">
          {text === ""
            ? core.map((person, idx) => {
                if (idx < 7)
                  return (
                    <div className="mycont" key={person}>
                      <button
                        className="committee-btn"
                        onClick={() => setText(person.name)}
                      >
                        <Image
                          className="img-shadow"
                          src={person.image}
                          width={"70%"}
                          height={"70%"}
                          roundedCircle
                        />
                      </button>
                      <h3 className="title">{person.name}</h3>
                      <h5 className="role">
                        <i>{person.title}</i>
                      </h5>
                      <button
                        className="committee-btn"
                        onClick={() => setText(person.name)}
                      >
                        Read More
                      </button>
                    </div>
                  );
                else
                  return (
                    <div className="mycont" key={idx}>
                      <button className="committee-btn"></button>
                      <h3 className="title"></h3>
                      <h5 className="role"></h5>
                      <button className="committee-btn"></button>
                    </div>
                  );
              })
            : core
                .filter((person) => person.name === text)
                .map((person) => (
                  <div className="comm-single" key={person}>
                    <button
                      className="committee-btn"
                      onClick={() => setText("")}
                    >
                      <Image
                        style={{ width: "100%", maxWidth: "40vh" }}
                        className="img-shadow"
                        src={person.image}
                        roundedCircle
                      />
                    </button>
                    <h2 className="title">{person.name}</h2>
                    <h3 className="role">
                      <i>{person.title}</i>
                    </h3>
                    <br />
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                      }}
                    >
                      {person.desc}
                    </p>
                    <button
                      className="resetbutton"
                      style={{
                        fontSize: "1.2rem",
                        color: "#08045a",
                        textDecoration: "underline",
                      }}
                      onClick={() => setText("")}
                    >
                      ← Go Back
                    </button>
                    <br />
                    <br />
                    {core
                      .filter((person) => person.name !== text)
                      .map((person, idx) => (
                        <button
                          key={person}
                          className="committee-btn"
                          onClick={() => setText(person.name)}
                        >
                          <Image
                            style={{ width: "100%", maxWidth: "10vh" }}
                            className="img-shadow"
                            src={person.image}
                            roundedCircle
                          />
                        </button>
                      ))}
                  </div>
                ))}
        </div>
        <h2>
          {(text === "" ||
            exec.find((person) => {
              if (person.name === text) return true;
            })) && (
            <>
              <strong>EMC² Executive Committee</strong>
              <hr />
            </>
          )}
        </h2>
        <div className="row">
          {text === ""
            ? exec.map((person) => (
                <div className="mycont" key={person}>
                  <button
                    className="committee-btn"
                    onClick={() => setText(person.name)}
                  >
                    <Image
                      className="img-shadow"
                      src={person.image}
                      width={"70%"}
                      height={"70%"}
                      roundedCircle
                    />
                  </button>
                  <h3 className="title">{person.name}</h3>
                  <h5 className="role">{person.title}</h5>
                  <button
                    className="committee-btn"
                    onClick={() => setText(person.name)}
                  >
                    Read More
                  </button>
                </div>
              ))
            : exec
                .filter((person) => person.name === text)
                .map((person) => (
                  <div className="mycont" key={person}>
                    <button className="committee-btn">
                      <Image
                        className="img-shadow"
                        src={person.image}
                        style={{ width: "100%", maxWidth: "40vh" }}
                        roundedCircle
                      />
                    </button>
                    <h2 className="title">{person.name}</h2>
                    <h3 className="role">{person.title}</h3>
                    <br />
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                      }}
                    >
                      {person.desc}
                    </p>
                    <button
                      className="resetbutton"
                      style={{
                        fontSize: "1.2rem",
                        color: "#08045a",
                        textDecoration: "underline",
                      }}
                      onClick={() => setText("")}
                    >
                      ← Go Back
                    </button>
                    <br />
                    <br />
                    {exec
                      .filter((person) => person.name !== text)
                      .map((person, idx) => (
                        <button
                          key={person}
                          className="committee-btn"
                          onClick={() => setText(person.name)}
                        >
                          <Image
                            style={{ width: "100%", maxWidth: "10vh" }}
                            className="img-shadow"
                            src={person.image}
                            roundedCircle
                          />
                        </button>
                      ))}
                  </div>
                ))}
        </div>
      </div>
    </Container>
  );
}
