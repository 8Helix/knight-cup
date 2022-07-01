import KnightCupLogo from './svgs/KnightCupLogo';

function Frame({ image, children }) {
  return (
    <section className="container">
      <div>
        <div className="head">
          <KnightCupLogo />
          <h2>Redberry Knight Cup</h2>
        </div>
        <img className="main-img" src={image} alt={Object.keys({ image })[0]} />
      </div>
      <div>{children}</div>
    </section>
  );
}

export default Frame;
