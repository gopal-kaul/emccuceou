import { Instagram, Facebook } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer
      className="text-center"
      style={{
        backgroundColor: "#292b2c",
        color: "#ffffff",
        marginBottom: "-1%",
        paddingBottom: "0.5%",
        paddingTop: "0.5%",
      }}
    >
      <p>
        <strong>EMC²</strong>
        <br />{" "}
        <i>
          Engineers’ Music and Cultural Club
          <br />
          University College of Engineering [A]
          <br />
          Osmania University, Hyderabad – 07 <br />
        </i>
        <a
          style={{ color: "#FFFFFF", textDecoration: "none" }}
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/emccuceou/"
        >
          <Instagram /> Instagram
        </a>
        <br />
        <a
          style={{ color: "#FFFFFF", textDecoration: "none" }}
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/emccuceou/"
        >
          <Facebook /> Facebook
        </a>
      </p>
    </footer>
  );
}
