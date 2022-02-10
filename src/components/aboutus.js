import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Aboutus() {
  return (
    <>
      <Container style={{ marginTop: "3%", marginBottom: "3%" }}>
        <h1>Engineers’ Music and Cultural Club - EMC²</h1>
        <hr />
        <br />
        <h3>Who are we?</h3>
        <p>
          EMC² is a club that aims toward building a conducive ecosystem for all
          the musicians and music lovers in the college to share their musical
          views and enhance their potential in every way possible. 
        </p>
        <br />
        <h3>What do we do?</h3>
        <p>
          EMC² conducts regular jam sessions and Open Mic events to provide a
          platform for students to express themselves. “RAAGA: The Voice Hunt”,
          the annual music competition organized by the club, draws a lot of raw
          talent to the limelight and gives them exposure to take their passion
          forward. The official band of the club, "The Jesters", formed last
          year has participated in a lot of events. Guitar classes are
          frequently held, where interested students are taught by members of
          the club itself. 
        </p>
        <br />
        <h3>Events participated by EMC²</h3>
        <p>
          EMC² actively participates in cultural events in the college like the
          “Global Alumni Meet, 2019” and the university’s former Vice-Chancellor
          Prof. S Ramachandram’s retirement ceremony. The club's band,{" "}
          <Link to={"/band"}>The Jesters</Link>, has participated in many inter
          college fests and competitions such as at Mahindra Ecole Centrale and
          National Institute of Fashion Technology's fest, Spectrum.
        </p>
      </Container>
    </>
  );
}
