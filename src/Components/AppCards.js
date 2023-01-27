import { useState } from "react";

import scscSplash from "../images/scscSplash.png";
import scscPodcasts from "../images/scscPodcasts.png";
import scscCarousel from "../images/scscCarousel.png";
import scscAbout from "../images/scscAbout.png";
import scscIcon from "../images/scscIcon.jpg";
import pressIcon from "../images/icon.png";
import frontScreen from "../images/blankPageScreen.png";
import mainScreen from "../images/mainPageScreen.png";
import editScreen from "../images/editRecipeScreen.png";
import splashScreen from "../images/atomicSplash2.jpg";

function createAppCard(alt, caption, src, title, index) {
  return (
    <div key={index} className="col-lg-6">
      <div className="card">
        <div className="row">
          <div className="col-7">
            <img
              src={src}
              className="card-img-top"
              style={{ border: "1px solid", borderTopRightRadius: 0 }}
              alt={alt}
            />
          </div>
          <div className="col-5 d-flex flex-column align-self-center">
            <div className="card-body" style={{ paddingLeft: 0 }}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{caption}</p>
            </div>
          </div>
        </div>
      </div>
      <p>{"\n"}</p>
    </div>
  );
}

export const scscMainCard = (
  <div className="card">
    <div className="row g-0">
      <div className="col-lg-4">
        <img className="img-fluid" src={scscIcon} alt="app indicator" />
      </div>
      <div className="card-body d-flex flex-column col-md-8 align-self-center">
        <h5 className="card-title">ScanSource Discover Opportunity App</h5>
        <p className="card-text">
          Custom-coded React Native app for ScanSource, Inc.
          <br />
          With original design from ScanSource's Creative and Digital Team.
          <br />
          See the app on the{" "}
          <a
            style={{ color: "#99CBA6" }}
            href="https://play.google.com/store/apps/details?id=com.scansource.discoveropportunity&hl=en_US&gl=US"
          >
            Google Play Store
          </a>{" "}
          and the{" "}
          <a
            style={{ color: "#99CBA6" }}
            href="https://apps.apple.com/us/app/discover-opportunity/id1618794221"
          >
            App Store.
          </a>
        </p>
      </div>
    </div>
  </div>
);

export const scscDataObject = {
  card1: {
    src: scscSplash,
    alt: "orange title screen",
    cardTitle: "Splash!",
    caption: "Full-screen splash with pressable icons.",
  },
  card2: {
    src: scscPodcasts,
    alt: "podcast main screen",
    cardTitle: "Custom Tiles",
    caption:
      "Motion graphics and pressable tiles, opening webview for company's web-based podcasts.",
  },
  card3: {
    src: scscCarousel,
    alt: "market tiles",
    cardTitle: "Filter Content by Keyword",
    caption:
      "A sliding carousel feeds keywords to the array method, which sorts data coming from the database.",
  },
  card4: {
    src: scscAbout,
    alt: "contact form",
    cardTitle: "Contact Us",
    caption:
      "Information from the contact form goes to the company's Salesforce account.",
  },
};

export const atomicPressMainCard = (
  <div className="card">
    <div className="row g-0">
      <div className="col-lg-4">
        <img className="img-fluid" src={pressIcon} alt="app indicator" />
      </div>
      <div className="card-body d-flex flex-column col-md-8 align-self-center">
        <h5 className="card-title">Atomic Press</h5>
        <p className="card-text">
          React Native app for randomly generating - then editing and saving -
          recipes for the AeroPress coffee brewer.
          <br />
          Inspired by 1950s atomic design.
          <br />
          See the app on the{" "}
          <a
            style={{ color: "#99CBA6" }}
            href="https://play.google.com/store/apps/details?id=com.robotlions.atomicpress"
          >
            Google Play Store
          </a>{" "}
          and the{" "}
          <a
            style={{ color: "#99CBA6" }}
            href="https://apps.apple.com/app/id1611197453"
          >
            App Store.
          </a>
        </p>
      </div>
    </div>
  </div>
);

export const atomicPressDataObject = {
  card1: {
    src: splashScreen,
    alt: "splash screen",
    cardTitle: "Boss!",
    caption: "Original graphics inspired by 1950s atomic design..",
  },
  card2: {
    src: frontScreen,
    alt: "app front screen",
    cardTitle: "Keen!",
    caption: "A clean, simple but functional UI.",
  },
  card3: {
    src: mainScreen,
    alt: "list of recipes",
    cardTitle: "Nifty!",
    caption: "Scroll through a list of saved, editable recipes.",
  },
  card4: {
    src: editScreen,
    alt: "editing screen",
    cardTitle: "The Bee's Knees",
    caption:
      "Users randomly generate coffee recipes then save locally. No internet connection needed.",
  },
};

export const AppDisplay = (props) => {
  const [infoCardsVisible, setInfoCardsVisible] = useState(false);

  const infoCardDisplay = (
    <div className="row">
      {Object.values(props.cardDataObject).map((item, index) =>
        createAppCard(item.alt, item.caption, item.src, item.cardTitle, index)
      )}
    </div>
  );

  return (
    <div className="row contentRow justify-content-center">
      <div className="textField col-md-6">
        <button onClick={() => setInfoCardsVisible(!infoCardsVisible)}>
          {!infoCardsVisible ? props.mainCard : infoCardDisplay}
        </button>
      </div>
    </div>
  );
};
