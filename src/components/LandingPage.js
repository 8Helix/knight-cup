import ArrowCircle from './svgs/ArrowCircle';
import LandingPhoto from '../imgs/Landing-photo.png';
import Frame from './Frame';

function LandingPage() {
  return (
    <Frame image={LandingPhoto}>
      <div className="landing-section">
        <h1>
          Chess says
          <div className="paragraph">
            <p>a lot about</p>
          </div>
        </h1>
        <h1>who we are</h1>
        <button className="button black landing-button-mr">
          Get Started <ArrowCircle />
        </button>
      </div>
    </Frame>
  );
}

export default LandingPage;

//  <main className="container">
//    <div>
//      <div className="head">
//        <KnightCupLogo />
//        <h2>Redberry Knight Cup</h2>
//      </div>
//      <img
//        className="main-img"
//        src={LandingPhoto}
//        alt={Object.keys({ LandingPhoto })[0]}
//      />
//    </div>
//    <div>
//      <div className="landing-section">
//        <h1>
//          Chess says
//          <div className="paragraph">
//            <p>a lot about</p>
//          </div>
//        </h1>
//        <h1>who we are</h1>
//        {/* <ArrowCircle /> */}
//      </div>
//    </div>
//  </main>;
