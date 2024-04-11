//TicTacToe5.js

import { useState } from 'react';
//add value and add onSquareClick to call function. onSquareClick is a property connected
//to a board component handle click.
function Square({value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
 }

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
   
    function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
    
    
    
    
    return (
      <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[0]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[0]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[0]} onSquareClick={handleClick} />
      </div>
    </>
  );
}
