import React, { useState } from 'react';

// Custom hook to manage global state for the button value
const useButtonValue = () => {
  const [buttonValue, setButtonValue] = useState('Initial Value');

  const handleClick = () => {
    // Update the button value on click
    setButtonValue('New Value');
  };

  return { buttonValue, handleClick };
};

// Button component
const Button = () => {
  const { buttonValue, handleClick } = useButtonValue();

  return (
    <button className="square" onClick={handleClick}>
      {buttonValue}
    </button>
  );
};

// Example usage
const App = () => {
  return (
    <div>
      <h1>Global Variable Button Example</h1>
      <Button />
    </div>
  );
};

export default NewButton;