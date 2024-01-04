import React from "react";

function DisplaySection({ triggerPreview }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">
        A Display that's up to 2x Brightr in the sun
      </span>
      <button className="button" onClick={triggerPreview}>
        Try Now!
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        Top
      </button>
    </div>
  );
}

export default DisplaySection;
