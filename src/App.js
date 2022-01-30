import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import logoBarColor from '../src/images/banner1800x300.png';
import dice1 from '../src/images/slice1c2.jpg';
import dice2 from '../src/images/slice2c2.jpg';
import dice3 from '../src/images/slice3c2.jpg';
import dice4 from '../src/images/slice4c2.jpg';

import {atomicPressCard, storyDiceCard, fallsCard, waterDropCard} from "./Components/Cards";




function App() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);


  

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
            <div className="row contentRow justify-content-center">
            <p className="textField col-md-8">{fallsCard}
            <br/>
            {waterDropCard}
            </p>
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
    </div>
    </motion.div>
  );
}



export default App;
