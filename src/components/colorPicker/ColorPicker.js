import React, { useState } from 'react';
import './ColorPicker.css'; // Create a CSS file for styling

const ColorPicker = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF3387', '#3366FF'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <div className="color-display" style={{ backgroundColor: selectedColor }}></div>
      <div className="color-squares">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-square ${color === selectedColor ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
