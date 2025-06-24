import React, { useState } from "react";

const Selection = ({ nextBackground }) => {
  const [background, setBackground] = useState({ background: "" });
  const [previewBackground, setPreviewBackground] = useState(null);

  const applyPreview = () => {
    setPreviewBackground(nextBackground);
  };

  const clearPreview = () => {
    setPreviewBackground(null);
  };

  const applyColor = () => {
    setBackground(nextBackground);
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
