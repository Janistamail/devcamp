import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="pikka"
            src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png"
            alt="123"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Logo</Nav.Link>
            <Nav.Link href="#link">Create Pikka</Nav.Link>
            <Nav.Link href="#home">Signup</Nav.Link>
            <Nav.Link href="#link">Signin</Nav.Link>
            <Nav.Link href="#home">Signout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
