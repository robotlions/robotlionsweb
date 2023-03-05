import pressIcon from "../images/icon.png";
import diceLogo from "../images/dicelogo.png";






export const rpgCard = (
  <div className="card">
    <div className="row g-0">
      <div className="col-lg-4">
        <img className="img-fluid" src={pressIcon} alt="game indicator" />
      </div>
      <div className="card-body col-md-8">
        <h5 className="card-title">Mobile Role Playing Game</h5>
        <p className="card-text">
          Mobile role playing game.
          <br />
          Coming early 2024.
        </p>
      </div>
    </div>
  </div>
);

export const storyDiceCard = (
  

  <div className="card">
    <div className="row g-0">
      <div className="col-lg-4">
          <img className="img-fluid" src={diceLogo} alt="game indicator" />
        
      </div>
      <div className="card-body col-md-8 d-flex flex-column align-self-center">
        <h5 className="card-title">
          Dungeons and Dragons 3.5 Character Generator
        </h5>
        <p className="card-text">
          Create a character for old-school D&D and export to pdf. Written in
          React.js and mobile responsive. Features optional rad fantasy-themed
          font.
        </p>
      </div>
    </div>
  </div>
);


