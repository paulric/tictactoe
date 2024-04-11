import React, { useState } from 'react';

const MyComponent = () => {
  const [displayText1, setDisplayText1] = useState(false);
  const [displayText2, setDisplayText2] = useState(false);

  const toggleText1 = () => {
    setDisplayText1(!displayText1);
  };

  const toggleText2 = () => {
    setDisplayText2(!displayText2);
  };

  return (
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
          <p>This is some extra text before the buttons:</p>
          
          <button onClick={toggleText1} >  
        Toggle Text 1
          </button>  
        
      {displayText1 && (
        <p>This is the text that appears and disappears when Toggle Text 1 button is clicked.</p>
          )}
          
          <div>
            <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}></div> 
        <button onClick={toggleText2} style={{ padding: '10px' }}> 
          Toggle Text 2
        </button>
      </div>
      {displayText2 && (
        <p></p>
      )}
      <p></p>
    </div>
  );
};

export default MyComponent;











/*
import React from 'react';
import ReactDOM from 'react-dom';
mport { function1, function2 } from './module';

import React, { useState } from 'react';




import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function MyButton() {
  return (
    
    <button>
      I'm a button
    </button>
   );
}

function myApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle Text</button>
      {isVisible && <p>This text will appear when the button is pushed.</p>}
    </>
  );
};









function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

    



      <p>This is my coding page</p>
        <h1>Welcome to my app</h1>
        <div><MyButton /></div>
      
      



        



        <p><h2>Codetesting Space</h2></p>



       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Here
        </a>
      </header>
    </div>
  );
}




export default App;
*/