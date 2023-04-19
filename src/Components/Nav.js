import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bannerMobile from "../images/robotLionsMobileBanner.png";





export const topNav = (
<Navbar bg="white" variant="light" expand="lg" style={{marginBottom:"40px"}}>
      
        <Navbar.Brand className="navbarBrandBar" href="#home"><img alt="robot lions" className="navLogo" src={bannerMobile} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://dnd35charactergenerator.web.app/" target="_blank">D&D 3.5 Character Generator</Nav.Link>
            <Nav.Link href="https://play.google.com/store/apps/developer?id=Robot+Lions" target="_blank">Play Store</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
)