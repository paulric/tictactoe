// App.js
import React from 'react';
import { MyProvider } from './MyContext';
import MyComponent from './MyComponent';

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
javascript
Copy code
// MyComponent.js
import React from 'react';
import { useCount, useIncrementCount, useResetCount } from './MyContext';

function MyComponent() {
  const count = useCount();
  const incrementCount = useIncrementCount();
  const resetCount = useResetCount();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default MyComponent;