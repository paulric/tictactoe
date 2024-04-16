//TicTacToe3.js/AppBckup
import "./styles.css"; // Import the CSS file
import { useState } from "react";






//represents each square within the board



//// custom Square
function Square({ value, onSquareClick }) {
  return (
    //button component that acts as clickable square that updates to 'X' or to 'O'.

    <button
      className="square"
      style={{
        border: "2px solid black",
        width: "100px",
        height: 100,
        margin: "10px",
      }}
      onClick={onSquareClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: '100%'
        }}
      >
        {value === 1 && (
          <p>
          <span className="large-char"> X </span>
        </p>
        )} 
        {value === -1 && (
          <p>
          <span className="large-char"> O </span>
        </p>
        )} 
      </div>
    </button>
  );
}

 //JavaScript supports closures which means an inner function (e.g. handleClick)
 //has access to variables and functions defined in a outer function (e.g.Board).
 //Board component fully controlled by the props it receives
function Board({ xIsNext, squares, onPlay }) {
  //following commented code is not required
  //const [xIsNext, setXIsNext] = useState(true);
  //state management is handled by the Board component! passing props to the child
  //square asks Board comp to update state of board keeping the state of all squares
  // will allow it to determine future winner. The below defines initial state
  
  //const [squares, setSquares] = useState(Array(9).fill(null));

  
  ///// I will try to store the status of each square 0: not-selected, 1: X, -1: O
 // const [squareStatus, setSquaresStatus] = useState(Array(9).fill(0));

  ///// value for turn if false, then it's turn for X, and other for O
  const [currentTurn, setCurrentTurn] = useState(false)

  //null can change to 'X'
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  //The code below represents the functions in use before the game function
  //was declared
    
    
  //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method
    
    
  // const nextSquares = squares.slice();
  //adding the i arg for nextSquares[i] supplies an x to each square
  // nextSquares[i] = (
  //  <p>
  //    <span className="large-char"> X </span>
  //  </p>
  //); //updates square
  //lets React know the state of the component has changed. This will trigger a re-render of the components
  //that use the squares state(Board) and child components(square components make up board)
  //setSquares(nextSquares);
  


  //// custom function for click
  //function _handleClick(i) {
  //  if (calculateWinner(squares) || squares[i]) {
  //   return;
  // }
  //  const nextSquares = squares.slice();
  // if (xIsNext) {
  //   nextSquares[i] = 'X';
  // } else {
  //    nextSquares[i] = 'O';
  // }
  //  onPlay(nextSquares);
 
  // can not click button which already taken

  // if(squareStatus[i] !== 0 ){
  //  alert("This button has already taken!");
  //   return;
  // }

  // console.log(squareStatus);
  /// update the ith value to currentTurn
  //setSquaresStatus(_squareStatus => _squareStatus.map((_square, index)=> index === i ? (!currentTurn ? 1 : -1) : _square));
  /// change turn
  //setCurrentTurn(_currnetTurn=> !_currnetTurn);
 

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  //When the square is clicked, the code after the => “arrow” will run, calling handleClick(0)*/
  //These components are called right away instead of passing handleClick as a prop.*/
  //argument for each call to handleclick(arg) corresponds to correct square
    // <Square value={squareStatus[0]} onSquareClick={() => _handleClick(0)} /> must become
   // <Square value={square[0]} onSquareClick={() => _handleClick(0)} />
  return (
    <>
    
      <div className="flex-box-center">
        //<div className="status>">{status}</div>          
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => _handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => _handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => _handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => _handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => _handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => _handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => _handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => _handleClick(7)} />
            <Square value={squaresStatus[8]} onSquareClick={() => _handleClick(8)} />
          </div>
        </div>
      
    </>
  );
     
  //You will now write a new top-level component called Game to display a list of past moves.
  //That’s where you will place the history state that contains the entire game history.
  
   function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
  //To render the squares for the current move,
    //you’ll want to read the last squares array from the history
    const [xIsNext, setXIsNext] = useState(true);//don't need usestate??
    
    const currentSquares = history[history.length - 1];
     
    function handlePlay(nextSquares) {
      //Here, [...history, nextSquares] creates a new array that contains all the items in history
      //...history spread syntax as “enumerate all the items in history
      setHistory([...history, nextSquares]);
      setXIsNext(!xIsNext);
    }
     
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    );
    }
    
    const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
    });
    return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }



  /*
  When clicking on a Square, the child Square component now asks the parent Board 
  component to update the state of the board. When the Board’s state changes, 
  both the Board component and every child Square re-renders automatically.
  The DOM <button> element’s onClick attribute has a special meaning to React
  because it is a built-in component. Props names should be onSomething and event handler
  function def'ns handleSomething */
}