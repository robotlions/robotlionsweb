import pressIcon from "/Users/chadmusick/Code/robotlions/src/images/icon.png";
import diceLogo from "/Users/chadmusick/Code/robotlions/src/images/dicelogo.png";
import frontScreen from '/Users/chadmusick/Code/robotlions/src/images/blankPageScreen.png';
import mainScreen from "/Users/chadmusick/Code/robotlions/src/images/mainPageScreen.png";
import editScreen from "/Users/chadmusick/Code/robotlions/src/images/editRecipeScreen.png";









export const atomicPressCard =

<div className="card">
    <div className="row g-0">
        <div className="col-lg-4">
                <img className="img-fluid" src={pressIcon} alt="app indicator"/></div>
                <div className="card-body col-md-8">
                  <h5 className="card-title">Atomic Press</h5>
                  <p className="card-text">React Native app for randomly generating - then editing and saving - recipes for the AeroPress coffee brewer. <br/>Inspired by 1950s atomic design.</p>
                </div>
                
                </div>
                </div>



export const atomicPressDataCards=<div className="row">
  <div className="col-lg-6">
<div className="card">
  <div className="row">
  <div className="col-7">
  <img src={frontScreen} className="card-img-top" style={{border: "1px solid"}} alt="app front screen"/>
  </div>
  <div className="col-5">
  <div className="card-body">
    <h5 className="card-title">Styling</h5>
    <p className="card-text">A clean, simple UI inspired by 1950s atomic design.</p>
  </div>
  </div>
  </div>
  </div>
  <p>{"\n"}</p>
</div>


<div className="col-lg-6">
<div className="card">
  <div className="row">
  <div className="col-7">
  <img src={mainScreen} className="card-img-top" style={{border: "1px solid"}} alt="list of recipes"/>
  </div>
  <div className="col-5">
  <div className="card-body">
    <h5 className="card-title">Browse</h5>
    <p className="card-text">Scroll through a list of saved, editable recipes.</p>
  </div>
  </div>
  </div>
  </div>
  <p>{"\n"}</p>
</div>

<div className="col-lg-6">
<div className="card">
  <div className="row">
  <div className="col-7">
  <img src={editScreen} className="card-img-top" style={{border: "1px solid"}} alt="editing screen"/>
  </div>
  <div className="col-5">
  <div className="card-body">
    <h5 className="card-title">Create, Edit and Store Locally</h5>
    <p className="card-text">Users randomly generate coffee recipes then save locally. No internet connection needed.</p>
  </div>
  </div>
  </div>
  </div>
</div>

</div>












export const rpgCard =

<div className="card">
    <div className="row g-0">
        <div className="col-lg-4">
                <img className="img-fluid" src={pressIcon} alt="game indicator"/></div>
                <div className="card-body col-md-8">
                  <h5 className="card-title">Mobile Role Playing Game</h5>
                  <p className="card-text">Mobile role playing game.<br/>Coming early 2023.</p>
                </div>
                
                </div>
                </div>


export const storyDiceCard =

<div className="card">
    <div className="row g-0">
        <div className="col-lg-4">
          <a href="https://robotlions.github.io/storydice/">
                <img className="img-fluid" src={diceLogo} alt="game indicator"/></a></div>
                <div className="card-body col-md-8">
                  <h5 className="card-title">Story Dice</h5>
                  <p  className="card-text">Web-based app written in React to randomly generate story prompts for fiction writers.</p>
                </div>
                
                </div>
                </div>


  



  