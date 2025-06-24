import React, { useState } from "react";
import '../styles/App.css';
import '../styles/child.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)'
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)'
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)'
  }
];

const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  const [nextBackground, selectNextBackground] = useState({ background: "" });

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="holder">
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground}
          />
        ))}
      </div>

      <div className='box-row' id="children-wrapper">
        {["selection1", "selection2", "selection3"].map(key => (
          <Selection key={key} nextBackground={nextBackground} />
        ))}
      </div>
    </div>
  );
};

export default App;
