import React from "react";
import Board from "./components/Board";

const board = [
  "X", "O", "X",
  " ", "O", " ",
  " ", "X", " ",
]

function App() {
  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
