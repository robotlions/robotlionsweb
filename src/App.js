import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { topNav } from "./Components/Nav";

import atomicPressGraphic from "./images/atomicPressWebsiteGraphic1.png";
import modernCoffeeGraphic from "./images/modernCoffeeWebsiteGraphic.png";
import dndGraphic from "./images/dnd35WebsiteGraphic3.png";
import curseGraphic from "./images/curseWebsiteGraphic3.png";
import googlePlayBadge from "./images/google-play-badge.png";

function App() {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const planeIcon = <FontAwesomeIcon icon={faPaperPlane} />;

  return (
    <div className="wrapper">
      <div className="container">
        {topNav}
        <div style={{ textAlign: "center" }}>
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
                <h3 className="card-title">Atomic Press</h3>
                <div className="card-text">
                  <p>
                    A nifty app for randomly generating, editing and saving
                    recipes for the{" "}
                    <a href="https://aeropress.com/">AeroPress Coffee Maker</a>.
                  </p>
                  <p>Featuring peachy keen, 1950s atomic graphics!</p>
                  <strong>Platform:</strong> Android
                  <br />
                  <strong>Language:</strong> React Native
                </div>
              </div>
              <div className="cta-btn">
                <a href="https://play.google.com/store/apps/details?id=com.robotlions.atomicpress">
                  <img
                    alt="google play"
                    className="googlePlayBadge"
                    src={googlePlayBadge}
                  />
                </a>
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
                <h3 className="card-title">Modern Coffee</h3>
                <div className="card-text">
                  <p>A robusto app for coffee nerds.</p>
                  <p>
                    Create and edit coffee recipes. Save them in the cloud and
                    access them across Android devices.
                  </p>
                  <p>
                    Deeply customizable. Create new brewing methods and
                    variables or use pre-loaded options.
                  </p>
                  <strong>Platform:</strong> Android
                  <br />
                  <strong>Language:</strong> React Native
                </div>
                <div className="cta-btn">
                  <strong>Coming Soon!</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>

        <div style={{ textAlign: "center" }}>
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
                <h3 className="card-title">
                  Dungeons and Dragons 3.5 Character Creator
                </h3>
                <div className="card-text">
                  <p>The best damned Dungeons and Dragons 3.5 Edition character generator on the Internet.</p>
                  <p>
                    Automatically generates printable character sheet.
                  </p>
                  <p>
                    Mobile-responsive for some reason.
                  </p>
                  <strong>Platform:</strong> Web
                  <br />
                  <strong>Language:</strong> React JS
                </div>
              </div>
              <div className="cta-btn">
                <a
                  href="https://dnd35.robotlions.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Dungeons and Dragons 3.5 Character Creator
                </a>
                <br />
                <a
                  href="https://github.com/robotlions/dndchar/"
                  rel="noreferrer"
                  target="_blank"
                >
                  See the code on GitHub
                </a>
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
                <h3 className="card-title">Curse of the Secret Pools!</h3>
                <div className="card-text">
                  <p>
                    Online editor for the classic Dungeons and Dragons Gold Box
                    video games.
                  </p>
                  <p>
                    Easily <span style={{textDecoration:"line-through"}}>cheat</span> augment the hell out of your characters.
                  </p>
                  <p>
                    Works for <em>Pools of Radiance</em>,{" "}
                    <em>Curse of the Azure Bonds</em>,{" "}
                    <em>Secret of the Silver Blades</em> and{" "}
                    <em>Pools of Darkness</em>.
                  </p>
                  <strong>Platform:</strong> Web
                  <br />
                  <strong>Language:</strong> React JS
                </div>
              </div>
              <div className="cta-btn">
                <a
                  href="https://goldbox.robotlions.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Curse of the Secret Pools!
                </a>
                <br />
                <a
                  href="https://github.com/robotlions/goldboxeditor/"
                  rel="noreferrer"
                  target="_blank"
                >
                  See the code on GitHub
                </a>
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
