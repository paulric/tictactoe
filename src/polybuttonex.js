
import React, { useState } from 'react';
import Button from './Button';

const App = () => {
  const [displayText, setDisplayText] = useState('');

  const handleClickPrimary = () => {
    setDisplayText('Primary button clicked!');
  };

  const handleClickSecondary = () => {
    setDisplayText('Secondary button clicked!');
  };

  const handleClickDefault = () => {
    setDisplayText('Default button clicked!');
  };

  return (
    <div>
      <h1>Polymorphic Button Example</h1>
      <Button variant="primary" onClick={handleClickPrimary} />
      <Button variant="secondary" onClick={handleClickSecondary} />
      <Button onClick={handleClickDefault} />
      <p>{displayText}</p> {/* Display text based on button clicks */}
    </div>
  );
};

export default App;