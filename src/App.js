import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [colors, setColors] = useState(Array(9).fill(""));

  const handleBoxClick = (index) => {
    if (clickedBoxes.length === 8) {
      const newColors = [...colors];
      clickedBoxes.forEach((clickedIndex, order) => {
        setTimeout(() => {
          newColors[clickedIndex] = "orange";
          setColors([...newColors]);
        }, order * 500);
      });
    } else if (!clickedBoxes.includes(index)) {
      const newColors = [...colors];
      newColors[index] = "green";
      setColors(newColors);
      setClickedBoxes([...clickedBoxes, index]);
    }
  };

  return (
    <div className="app-container">
      <h1 className="heading">Color Changing Matrix</h1>
      <div className="matrix-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleBoxClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <footer className="footer">By Gnapika Konkala</footer>
    </div>
  );
};

export default App;
