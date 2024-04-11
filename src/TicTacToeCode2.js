//tictactoe2.js


import React, { useState } from 'react';

/*Square({ value }) inserts word 'value' into each square
curly braces escapes into javascript from JSX. Because value is 
present you don't have an empty board. Replaces <Square value="1" />*/
function Square({value}) {
  /*defines what goes into each square*/
  return <button className="Square">{value}</button>
  //const [value, setValue] = useState(null);
/*event handler set up*/
   // function handleClick() {
    /*needs defintion in square method with const*/
   // setValue('X');
 // }
 // return (
/* This code implements handleClick() but without the console.log command*/
  //  <button
  //    className="square"
      /*event handler*/
   //   onClick={handleClick}
    >
   //   {value}
   // </button>
 // );



    /*lets make clicked text show up
    <>
      <button className="square" style={{ border: '2px solid black' }}>value</button>
    
    </>
  );
  */

//board rendering using jsx syntax
/*declare the shared state in their parent component*/
export default function Board() {
  //state sharing below but that means the board components have to change
  // to pick up the shared state
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    /* These render squares for the board but the size needs to be adjusted in
      the button class. Each square has its own state with each square independent of 
      the others
      store the game’s state in the parent Board component instead of in each 
      Square. The Board component can tell each Square what to display by 
      passing a prop, like you did when you passed a number to each Square.
      
      */
    /*Board component needs to pass the value prop down to each
    Square that it renders 
    <this Square value={squares[0]}/> from this <Square /> 
    State is held by the squares variable 
    connect the onSquareClick prop to a function in the Board 
    component that you’ll name handleClick
    <Square value={squares[3]} is changed to <Square value={squares[0]} onSquareClick={handleClick}/>
    */
    
    <>
      <div className="board-row" >
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} onSquareClick={handleClick}/>
      </div>
    </>
  );
}
