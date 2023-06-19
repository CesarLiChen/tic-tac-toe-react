import React, { useState } from "react";
import Board from "./Board";

const board = [
  "X", "O", "X",
  " ", "O", " ",
  " ", "X", " ",
]

const X_SYMBOL = "X";
const O_SYMBOL = "O";

function Game() {

  const [currPlayer, setCurrentPlayer] = useState(X_SYMBOL);

  function handleBoardClick(index) {
    setCurrentPlayer(currPlayer === X_SYMBOL ? O_SYMBOL : X_SYMBOL);
  }

  return (
    <div>
      <Board 
        board={board} 
        onBoardClick={handleBoardClick}
      />
      {currPlayer}
    </div>
    
  );
}

export default Game;