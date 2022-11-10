import scscSplash from "../images/scscSplash.png";
import scscPodcasts from "../images/scscPodcasts.png";
import scscMarket from "../images/scscMarket.png";
import scscCarousel from "../images/scscCarousel.png";
import scscAbout from "../images/scscAbout.png";
import scscIcon from "../images/scscIcon.jpg";

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

export const scscAppCard = (
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

const scscAppDataCardObject = {
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

export const ScscApp = (props) => {
  return (
  <div className="row">
  {Object.values(scscAppDataCardObject).map((item, index) =>
    createAppCard(item.alt, item.caption, item.src, item.cardTitle, index)
  )}
  </div>
)};
