import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";
import { topNav } from "./Components/Nav";

import atomicPressGraphic from "./images/atomicPressWebsiteGraphic1.png";
import modernCoffeeGraphic from "./images/modernCoffeeWebsiteGraphic2.png";

function App() {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const planeIcon = <FontAwesomeIcon icon={faPaperPlane} />;
  const flickrIcon = <FontAwesomeIcon icon={faFlickr} />;

  return (
    <div className="container-fluid px-lg-5">
      {topNav}
      <div className="card mb-3" style={{maxWidth: "100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={atomicPressGraphic} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{maxWidth: "100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={modernCoffeeGraphic} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      
       
    </div>
  );
}

export default App;
