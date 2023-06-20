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

  function getWinner() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    const winningCombo = winningCombinations.find(combo => {
      if(board[combo[0]] && 
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]) {
          return true;
      } else {
        return false;
      }
    });
    return winningCombo ? board[winningCombo[0]] : false;
  }

  console.log(getWinner());
  return (
    <div>
      <Board 
        board={board} 
        onBoardClick={handleBoardClick}
      />
      {currPlayer}
      {getWinner()}
    </div>
    
  );
}

export default Game;