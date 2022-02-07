import { NavDropdown, Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function MyNavbar() {
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
                alt="EMC² Logo"
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
              <NavDropdown title="The Committee" id="collasible-nav-dropdown">
                <LinkContainer to={"/committee"}>
                  <NavDropdown.Item>Present Committee</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/pastcommittee"}>
                  <NavDropdown.Item>Past Committees</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Members" id="collasible-nav-dropdown">
                <LinkContainer to={"/special"}>
                  <NavDropdown.Item>Special Mentions</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/singers"}>
                  <NavDropdown.Item>Spotlight (Singers)</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/dancers"}>
                  <NavDropdown.Item>Spotlight (Dancers)</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to={"/band"}>
                <Nav.Link>The Band</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/events"}>
                <Nav.Link>Events</Nav.Link>
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
