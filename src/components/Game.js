import React from "react";
import Board from "./Board";

const board = [
  "X", "O", "X",
  " ", "O", " ",
  " ", "X", " ",
]

function Game() {
  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default Game;