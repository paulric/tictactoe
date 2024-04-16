// MyContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Define a provider component
export function MyProvider({ children }) {
  // Define state
  const [count, setCount] = useState(0);

  // Define function to increment count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Define function to reset count
  const resetCount = () => {
    setCount(0);
  };

  // Provide the value to consumers
  return (
    <MyContext.Provider value={{ count, incrementCount, resetCount }}>
      {children}
    </MyContext.Provider>
  );
}

// Define custom hooks to consume the context
export function useCount() {
  return useContext(MyContext).count;
}

export function useIncrementCount() {
  return useContext(MyContext).incrementCount;
}

export function useResetCount() {
  return useContext(MyContext).resetCount;
}