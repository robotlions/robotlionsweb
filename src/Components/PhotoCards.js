import { useState } from "react";

import falls from "../images/falls.jpg";
import waterDrop from "../images/waterDrop.jpg";
import loopFalls from "../images/danielLoopFalls.jpg";
import quarrySteps from "../images/quarrySteps.jpg";
import parkwayFalls from "../images/parkwayFalls.jpg";
import splashBW from "../images/splashBW.jpg";
import wineSplash from "../images/wineSplash.jpg";
import folly from "../images/folly.jpg";
import daylily from "../images/daylily800.jpg";
import watchMovement from "../images/watchMovement.jpg";
import fountain from "../images/fountain.jpg"
import ironSpiral from "../images/ironSpiral.jpg"

const photoObjects = {
  fallsCard: {
    src: falls,
    alt: "water and rocks",
    caption: "Long exposure on film.",
  },
  waterDropCard: {
    src: waterDrop,
    alt: "reflection in drop of water",
    caption: "Digital photo with vintage macro lens.",
  },
  loopFallsCard: {
    src: loopFalls,
    alt: "waterfall at daniel loop trail",
    caption: "Daniel Loop Falls in Pisgah National Forest.",
  },
  quarryStepsCard: {
    src: quarrySteps,
    alt: "stone staircase",
    caption: "Stone steps in an old rock quarry.",
  },
  parkwayFallsCard: {
    src: parkwayFalls,
    alt: "waterfall behind trees",
    caption: "Waterfall in North Carolina off the Blue Ridge Parkway.",
  },
  splashBWCard: {
    src: splashBW,
    alt: "single drop of water splashing into dark pool",
    caption:
      "If I were Richard Dreyfuss' character from Close Encounters, water drop photography would be my mountain of mashed potatoes.",
  },
  wineSplashCard: {
    src: wineSplash,
    alt: "red wine splashing into glass",
    caption: "From a previous life as a wine professional.",
  },
  follyCard: {
    src: folly,
    alt: "ocean and stars at night",
    caption: "Long exposure at night.",
  },
  daylilyCard: {
    src: daylily,
    alt: "yellow daylily with black background",
    caption: "Light-painted daylily.",
  },
  watchMovementCard: {
    src: watchMovement,
    alt: "internal gears of a mechanical watch",
    caption: "Inside the movement of a mechanical watch.",
  },
  fountainCard: {
    src: fountain,
    alt: "fountain water in motion",
    caption: "Water frozen in motion.",
  },
  ironSpiralCard: {
    src: ironSpiral,
    alt: "spiraled wrought iron",
    caption: "Goofing around with a new lens with a really wide aperture.",
  },
};

export const PhotoCard = (props) => {
  const [textVisible, setTextVisible] = useState(false);

  return (
    <button className="buttonBox" onClick={() => setTextVisible(!textVisible)}>
      {!textVisible ? (
        <img className="photoImg" alt={props.alt} src={props.src} />
      ) : (
        <p className="photoText">{props.caption}</p>
      )}
    </button>
  );
};

export const PhotoGallery = (props) => {
  return Object.values(photoObjects).map((item, index) => (
    <div key={index} className="photoPanel col-md-3">
      <PhotoCard src={item.src} alt={item.alt} caption={item.caption} />
    </div>
  ));
};
