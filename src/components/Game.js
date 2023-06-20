import React, { useState } from "react";
import Board from "./Board";

const startingBoard = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " ",
]

const X_SYMBOL = "X";
const O_SYMBOL = "O";

function Game() {

  const [board, setBoard] = useState(startingBoard);
  const [currPlayer, setCurrentPlayer] = useState(X_SYMBOL);

  function handleBoardClick(index) {
    if(board[index] === " ") {
      const newBoard = [...board];
      newBoard[index] = currPlayer;
      setBoard(newBoard);
    }

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