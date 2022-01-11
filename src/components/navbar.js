import { NavDropdown, Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function MyNavbar({ selected }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="mynav" variant="dark">
        <Container fluid>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <Image
                width={45}
                height={50}
                src="/images/logo_white.png"
                alt="EMCC Logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/committee"}>
                <Nav.Link>The Committee</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Members" id="collasible-nav-dropdown">
                <LinkContainer to={"/special"}>
                  <NavDropdown.Item>Special Mentions</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/featured"}>
                  <NavDropdown.Item>Featured</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to={"/events"}>
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/gallery"}>
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/contact"}>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
