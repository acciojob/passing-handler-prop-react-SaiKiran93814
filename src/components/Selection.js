import React, { useState } from "react";

const Selection = ({ nextBackground, background, index, applyBackground }) => {
  const [previewBackground, setPreviewBackground] = useState(null);

  const applyPreview = () => {
    setPreviewBackground(nextBackground);
  };

  const clearPreview = () => {
    setPreviewBackground(null);
  };

  const applyColor = () => {
    applyBackground(index); // Set permanent color
    clearPreview();
  };

  return (
    <div
      className="fix-box"
      style={previewBackground || background}
      onMouseEnter={applyPreview}
      onMouseLeave={clearPreview}
      onClick={applyColor}
    />
  );
};

export default Selection;
