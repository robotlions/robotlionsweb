import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bannerMobile from "../images/robotLionsMobileBanner.png";





export const topNav = (
<Navbar bg="white" variant="light" expand="lg" style={{marginBottom:"40px"}}>
      
        <Navbar.Brand className="navbarBrandBar" href="#home"><img alt="robot lions" className="navLogo" src={bannerMobile} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="https://dnd35.robotlions.com/" target="_blank">D&D 3.5 Character Generator</Nav.Link>
            <Nav.Link href="https://goldbox.robotlions.com/" target="_blank">Gold Box Game Editor</Nav.Link>
            
            <Nav.Link href="https://play.google.com/store/apps/developer?id=Robot+Lions" target="_blank">Play Store</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
)