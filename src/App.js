import { Accordion } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";

// import logoBarColor from "../src/images/robotLionsBannerRight1800x160.png";
// import bannerMobile from "../src/images/robotLionsMobileBanner.png";
import dice1 from "../src/images/slice1c2.jpg";
import dice2 from "../src/images/slice2c2.jpg";
import dice3 from "../src/images/slice3c2.jpg";
import dice4 from "../src/images/slice4c2.jpg";
import mobileSlice1 from "../src/images/mobileSlice1.png";
import mobileSlice2 from "../src/images/mobileSlice2.png";
import mobileSlice3 from "../src/images/mobileSlice3.png";
import mobileSlice4 from "../src/images/mobileSlice4.png";

import { PhotoGallery } from "./Components/PhotoCards";
import {
  scscMainCard,
  scscDataObject,
  atomicPressMainCard,
  atomicPressDataObject,
  AppDisplay,
} from "./Components/AppCards";

import { storyDiceCard } from "./Components/Cards";
import { topNav } from "./Components/Nav";

function App() {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const planeIcon = <FontAwesomeIcon icon={faPaperPlane} />;
  const flickrIcon = <FontAwesomeIcon icon={faFlickr} />;

  return (
    <div className="container-fluid px-lg-5">
      {topNav}

      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img className="fullImage" src={dice1} alt="apps button"></img>
            <img
              className="mobileImage"
              src={mobileSlice1}
              alt="apps button mobile"
            ></img>
          </Accordion.Header>
          <Accordion.Body>
            <AppDisplay
              cardDataObject={scscDataObject}
              mainCard={scscMainCard}
            />

            <AppDisplay
              cardDataObject={atomicPressDataObject}
              mainCard={atomicPressMainCard}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img className="fullImage" src={dice2} alt="websites button"></img>
            <img
              className="mobileImage"
              src={mobileSlice2}
              alt="websites button mobile"
            ></img>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row contentRow justify-content-center">
              <div className="textField col-md-6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="siteLinkCard"
                  href="https://dnd35charactergenerator.web.app/"
                >
                  {storyDiceCard}
                </a>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <img
              className="fullImage"
              src={dice3}
              alt="photography button"
            ></img>
            <img
              className="mobileImage"
              src={mobileSlice3}
              alt="photography button mobile"
            ></img>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row photosRow contentRow justify-content-center">
              <PhotoGallery />
              <a
                style={{ textAlign: "center" }}
                href="https://flickr.com/photos/183126740@N02/"
              >
                Portfolio on Flickr
              </a>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <img className="fullImage" src={dice4} alt="about button"></img>
            <img
              className="mobileImage"
              src={mobileSlice4}
              alt="about button mobile"
            ></img>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row contentRow justify-content-center">
              <div className="textField col-md-8">
                <p>
                  Electronic Communication
                  <br /> info --atsymbol-- robotlions.com
                </p>
                <a
                  style={{ color: "black", fontWeight: "bold" }}
                  href="http://www.github.com/robotlions"
                >
                  Github
                </a>
                <br />
                <a
                  style={{ color: "black", fontWeight: "bold" }}
                  href="https://flickr.com/photos/183126740@N02/"
                >
                  Flickr
                </a>
                <br />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="row brandRow text-end fixed-bottom">
        <p className="linkLogos">
          <a id="gitLogo" href="https://github.com/robotlions">
            {githubIcon}
          </a>
          {"\n"}
          <a id="mailLogo" href="mailto:info@robotlions.com">
            {planeIcon}
          </a>
          {"\n"}

          <a id="flickrLogo" href="https://flickr.com/photos/183126740@N02/">
            {flickrIcon}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
