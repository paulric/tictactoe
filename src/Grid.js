import React from 'react';

const Grid = () => {
  // Create a 2D array to represent the grid
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="grid-cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;