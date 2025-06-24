import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, label, classname } = config;

  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
