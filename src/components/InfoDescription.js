function InfoDescription({ children }) {
  return (
    <>
      <div className="start">
        <p className="container">{children[0]}</p>
      </div>
      <div className="step container">
        <div className="step-box">
          <div className="step-number">1</div>
          <p className="step-description">Personal information</p>
        </div>
        <div className="step-line">
          <div></div>
        </div>
        <div className="step-box">
          <div className="step-number">2</div>
          <p className="step-description">Chess experience</p>
        </div>
      </div>
      <div className="step-title container">
        <h3>{children[1]}</h3>
        <p>This Is Basic Informaton Fields</p>
      </div>
    </>
  );
}

export default InfoDescription;
