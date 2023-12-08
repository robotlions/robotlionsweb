import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { topNav } from "./Components/Nav";

import atomicPressGraphic from "./images/atomicPressWebsiteGraphic1.png";
import modernCoffeeGraphic from "./images/modernCoffeeWebsiteGraphic2.png";
import dndGraphic from "./images/dnd35WebsiteGraphic2.png";
import curseGraphic from "./images/curseWebsiteGraphic3.png";

function App() {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const planeIcon = <FontAwesomeIcon icon={faPaperPlane} />;

  return (
    <div className="wrapper">
      <div className="container">
        {topNav}
        <div style={{textAlign:"center"}}>
          <h2 className="categoryHeadline">Mobile Apps</h2>
        </div>
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={atomicPressGraphic}
                className="img-fluid rounded-start"
                alt="retro coffee cup on starburst"
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Atomic Press</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={modernCoffeeGraphic}
                className="img-fluid rounded-start"
                alt="1970s orange coffee pot"
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Modern Coffee</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>

        <div style={{textAlign:"center"}}>

          <h2 className="categoryHeadline">Web Apps</h2>
        </div>

        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={dndGraphic}
                className="img-fluid rounded-start"
                alt="character sheet dice and pencils"
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Dungeons and Dragons 3.5 Character Generator</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={curseGraphic}
                className="img-fluid rounded-start"
                alt="video game nerds"
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Curse of the Secret Pools!</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row brandRow text-end fixed-bottom">
          <p className="linkLogos">
            <a id="gitLogo" href="https://github.com/robotlions">
              {githubIcon}
            </a>
            {"\n"}
            <a id="mailLogo" href="mailto:info@robotlions.com">
              {planeIcon}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
