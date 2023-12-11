import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import gradientLogo from "../images/gradientLogoText.png";

export const topNav = (
  <Navbar
    bg="transparent"
    variant="light"
    expand="lg"
    style={{ marginBottom: "40px" }}
  >
    <Navbar.Brand className="navbarBrandBar">
      <img alt="robot lions" className="navLogo" src={gradientLogo} />
    
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">
        

        <Nav.Link
        href="#about"
        >
         <h4>About</h4>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
