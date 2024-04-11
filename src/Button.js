import React from 'react';

const Button = ({ variant, onClick }) => {
  let buttonStyle;

  // Determine button style based on the variant prop
  if (variant === 'primary') {
    buttonStyle = {
      backgroundColor: 'blue',
      color: 'white',
    };
  } else if (variant === 'secondary') {
    buttonStyle = {
      backgroundColor: 'gray',
      color: 'black',
    };
  } else {
    buttonStyle = {
      backgroundColor: 'black',
      color: 'white',
    };
  }

  return (
    <button onClick={onClick} style={buttonStyle}>
      Click Me
    </button>
  );
};

export default Button;