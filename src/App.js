import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import logoBarColor from '../src/images/banner1800x300.png';
import dice1 from '../src/images/slice1c2.jpg';
import dice2 from '../src/images/slice2c2.jpg';
import dice3 from '../src/images/slice3c2.jpg';
import dice4 from '../src/images/slice4c2.jpg';



import falls from "../src/images/falls.jpg";
import waterDrop from "../src/images/waterDrop.jpg";
import loopFalls from "../src/images/danielLoopFalls.jpg";
import quarrySteps from "../src/images/quarrySteps.jpg";
import parkwayFalls from "../src/images/parkwayFalls.jpg";
import splashBW from "../src/images/splashBW.jpg";
import wineSplash from "../src/images/wineSplash.jpg";
import waterRefraction from "../src/images/waterRefraction.jpg";




import { atomicPressCard, storyDiceCard} from "./Components/Cards";




function App() {

  

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const [fallsTextVisible, setFallsTextVisible] = useState(false);
  const [waterDropTextVisible, setWaterDropTextVisible] = useState(false);
  const [loopFallsTextVisible, setLoopFallsTextVisible] = useState(false);
  const [quarryStepsTextVisible, setQuarryStepsTextVisible] = useState(false);
  const [parkwayFallsTextVisible, setParkwayFallsTextVisible] = useState(false);
  const [splashBWTextVisible, setSplashBWTextVisible] = useState(false);
  const [wineSplashTextVisible, setWineSplashTextVisible] = useState(false);
  const [waterRefractionTextVisible, setWaterRefractionTextVisible] = useState(false);

  const fallsCard = <button className="buttonBox" onClick={()=>setFallsTextVisible(!fallsTextVisible)}>
  {!fallsTextVisible ? <img className="photoImg" alt="water and rocks" src={falls} /> : <p className="photoText">Long exposure on film.</p>}
  </button>
  const waterDropCard = <button className="buttonBox" onClick={()=>setWaterDropTextVisible(!waterDropTextVisible)}>
  {!waterDropTextVisible ? <img className="photoImg" alt="reflection in drop of water" src={waterDrop} /> : <p className="photoText">Digital photo with vintage macro lens.</p>}
  </button>
  const loopFallsCard = <button className="buttonBox" onClick={()=>setLoopFallsTextVisible(!loopFallsTextVisible)}>
  {!loopFallsTextVisible ? <img className="photoImg" alt="waterfall at daniel loop trail" src={loopFalls} /> : <p className="photoText">Daniel Loop Falls in Pisgah National Forest.</p>}
  </button>
  const quarryStepsCard = <button className="buttonBox" onClick={()=>setQuarryStepsTextVisible(!quarryStepsTextVisible)}>
  {!quarryStepsTextVisible ? <img className="photoImg" alt="stone staircase" src={quarrySteps} /> : <p className="photoText">Stone steps in an old rock quarry.</p>}
  </button>
  const parkwayFallsCard = <button className="buttonBox" onClick={()=>setParkwayFallsTextVisible(!parkwayFallsTextVisible)}>
  {!parkwayFallsTextVisible ? <img className="photoImg" alt="waterfall behind trees" src={parkwayFalls} /> : <p className="photoText">Waterfall in North Carolina off the Blue Ridge Parkway.</p>}
  </button>
  const splashBWCard = <button className="buttonBox" onClick={()=>setSplashBWTextVisible(!splashBWTextVisible)}>
  {!splashBWTextVisible ? <img className="photoImg" alt="single drop of water splashing in dark pool" src={splashBW} /> : <p className="photoText">If I were Richard Dreyfuss' character from Close Encounters, water drop photography would be my mountain of mashed potatoes.</p>}
  </button>
  const wineSplashCard = <button className="buttonBox" onClick={()=>setWineSplashTextVisible(!wineSplashTextVisible)}>
  {!wineSplashTextVisible ? <img className="photoImg" alt="red wine splashing into glass" src={wineSplash} /> : <p className="photoText">From a previous life as a wine professional.</p>}
  </button>
  const waterRefractionCard = <button className="buttonBox" onClick={()=>setWaterRefractionTextVisible(!waterRefractionTextVisible)}>
  {!waterRefractionTextVisible ? <img className="photoImg" alt="color background refracting through water drops" src={waterRefraction} /> : <p className="photoText">Goofing around with water and construction paper.</p>}
  </button>
  
  const githubIcon = <FontAwesomeIcon icon={faGithub}/>
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelopeOpenText}/>
  const planeIcon = <FontAwesomeIcon icon={faPaperPlane}/>
  

  return (
    <motion.div>
    <div className="container g-4">
      
      <div className="row logoRow">
        <img src={logoBarColor} alt="robot lions"></img></div>
      
      <div className="row">
      <AnimatePresence>
        <motion.div
          key="question"
          onClick={() => setIsOpen1(!isOpen1)}
        >
          <motion.div className='imageRow'>
            <img className="image" src={dice1} alt="apps button"></img>
          </motion.div>
        </motion.div>

        {isOpen1 && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="row contentRow justify-content-center">
            <div className="textField col-md-8">{atomicPressCard}
            </div>
            </div>
          </motion.div>
        )}
        
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key="question"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          <motion.div className='imageRow'>
            <img className="image" src={dice2} alt="websites button"></img>
          </motion.div>
        </motion.div>

        {isOpen2 && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="row contentRow justify-content-center">
            <p className="textField col-md-8">{storyDiceCard}</p>
            </div>
          </motion.div>
        )}
        
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key="question"
          onClick={() => setIsOpen3(!isOpen3)}
        >
          <motion.div className='imageRow'>
            <img className="image" src={dice3} alt="photography button"></img>
          </motion.div>
        </motion.div>

        {isOpen3 && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="row photosRow contentRow justify-content-center">
            <p className="col-md-3">{fallsCard}</p>
            <p className="col-md-3">{waterDropCard}</p>
            <p className="col-md-3">{loopFallsCard}</p>
            <p className="col-md-3">{quarryStepsCard}</p>
            <p className="col-md-3">{parkwayFallsCard}</p>
            <p className="col-md-3">{splashBWCard}</p>
            <p className="col-md-3">{wineSplashCard}</p>
            <p className="col-md-3">{waterRefractionCard}</p>

            </div>
          </motion.div>
        )}
        
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key="question"
          onClick={() => setIsOpen4(!isOpen4)}
        >
          <motion.div className='imageRow'>
            <img className="image" src={dice4} alt="about button"></img>
          </motion.div>
        </motion.div>

        {isOpen4 && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="row contentRow justify-content-center">
              <div className="textField col-md-8">
            <p>Electronic Communication<br/> info --atsymbol-- robotlions.com</p><p>github<br/>/robotlions</p><p>Social<br/>hah hah no</p>
            </div></div>
          </motion.div>
        )}
        
      </AnimatePresence>
      
      
      </div>
      <div className="row brandRow text-end fixed-bottom">
        <p className="linkLogos">
        <a id="gitLogo" href="https://github.com/robotlions">{githubIcon}</a>
        {"\n"}
        <a id="mailLogo" href="mailto:info@robotlions.com">{planeIcon}</a></p></div>
    </div>
    </motion.div>
  );
}



export default App;
