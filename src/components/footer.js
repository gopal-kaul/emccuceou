import { Instagram, Facebook, Youtube } from "react-bootstrap-icons";
export default function Footer() {
  return (
    <footer
      className="text-center myfooter"
      style={{
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
          <Instagram size={"1.3rem"} />
        </a>
        {"     "}
        <a
          style={{ color: "#FFFFFF", textDecoration: "none" }}
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/emccuceou/"
        >
          <Facebook size={"1.3rem"} />
        </a>
        {"     "}
        <a
          style={{ color: "#FFFFFF", textDecoration: "none" }}
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UC78GI0nIAsYtbUix2_QbN7Q"
        >
          <Youtube size={"1.8rem"} />
        </a>
      </p>
    </footer>
  );
}
