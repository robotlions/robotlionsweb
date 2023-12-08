import Navbar from "react-bootstrap/Navbar";
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
  </Navbar>
);
