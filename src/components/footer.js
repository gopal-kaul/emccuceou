import { Instagram, Facebook, Youtube, Twitter } from "react-bootstrap-icons";
export default function Footer() {
  return (
    <div>
      <footer
        className="text-center myfooter"
        style={{
          color: "#ffffff",
          paddingBottom: "1%",
          paddingTop: "2%",
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginTop: "15px",
                width: "150px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a
                style={{ color: "#FFFFFF", textDecoration: "none" }}
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/emccuceou/"
              >
                <Instagram size={"1.3rem"} />
              </a>
              <a
                style={{ color: "#FFFFFF", textDecoration: "none" }}
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UC78GI0nIAsYtbUix2_QbN7Q"
              >
                <Youtube size={"1.3rem"} />
              </a>
              <a
                style={{ color: "#FFFFFF", textDecoration: "none" }}
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/emccuceou/"
              >
                <Facebook size={"1.3rem"} />
              </a>
              <a
                style={{ color: "#FFFFFF", textDecoration: "none" }}
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/emccuceou"
              >
                <Twitter size={"1.3rem"} />
              </a>
            </div>
          </div>
        </p>
      </footer>
      <div
        className="myfooter"
        style={{
          color: "grey",
          paddingLeft: "0.5%",
          marginBottom: "-5%",
          paddingBottom: "-1%",
        }}
      >
        <p>&copy; Engineers’ Music and Cultural Club, 2022</p>
      </div>
    </div>
  );
}
