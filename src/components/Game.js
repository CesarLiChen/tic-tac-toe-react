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

  return (
    <div>
      <Board board={board} onBoardClick={(index) => setCurrentPlayer(O_SYMBOL)}/>
      {currPlayer}
    </div>
    
  );
}

export default Game;