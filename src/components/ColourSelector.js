import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, label, classname, key } = config;

  return (
    <button
      className={classname}
      data-testid={key} 
      onClick={() => selectNextBackground({ background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
