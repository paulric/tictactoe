//TicTacToe3.js
import './styles.css'; // Import the CSS file
import { useState } from 'react';

//represents each square within the board
function Square({ value, onSquareClick }) {
  return (
    //button component that acts as clickable square that updates to 'X' or to 'O'.

    <button className="square" style={{
      border: '2px solid black', padding: '50px', margin: '10px'}}
      onClick = { onSquareClick } >{value}
    </button>
  );
}

//JavaScript supports closures which means an inner function (e.g. handleClick) 
//has access to variables and functions defined in a outer function (e.g.Board).
export default function Board() {
  //state management is handled by the Board component! passing props to the child
  //square asks Board comp to update state of board keeping the state of all squares 
  // will allow it to determine future winner. The below defines initial state
  const [squares, setSquares] = useState(Array(9).fill(null));
  //null can change to 'X'
  function handleClick(i) {
    //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method
    const nextSquares = squares.slice();
    //adding the i arg for nextSquares[i] supplies an x to each square
    nextSquares[i] = <p><span className="large-char"> X </span></p>//updates square
    //lets React know the state of the component has changed. This will trigger a re-render of the components
    //that use the squares state(Board) and child components(square components make up board)
    setSquares(nextSquares);
  }
  return (
    /*When the square is clicked, the code after the => “arrow” will run, calling handleClick(0)*/
    /*These components are called right away instead of passing handleClick as a prop.*/
    //argument for each call to handleclick(arg) corresponds to correct square
    <>
      <div className="board-row">
        
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
/*When clicking on a Square, the child Square component now asks the parent Board 
component to update the state of the board. When the Board’s state changes, 
both the Board component and every child Square re-renders automatically.*/
/*The DOM <button> element’s onClick attribute has a special meaning to React
 because it is a built-in component. Props names should be onSomething and event handler
function def'ns handleSomething*/

