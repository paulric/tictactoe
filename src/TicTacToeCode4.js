//TicTacToe5.js

import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

  export default function Board() {
    <>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
    </>
  );
}
.large-char {
    font-size: 24px; /* Increase the font size to 24 pixels */
}