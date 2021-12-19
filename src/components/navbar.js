import { NavDropdown, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function MyNavbar({ selected }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img width={50} height={50} src="/images/logo_white.png" alt="EMCC Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/committee">The Committee</Nav.Link>
              <NavDropdown title="Members" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/special">Special Mentions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/featured">Featured</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
