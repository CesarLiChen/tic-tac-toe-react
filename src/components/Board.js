import React from "react";
import Square from "./Square";

function Board(props) {
  console.log(props.board);
  return (
    <div className="board">
      {props.board.map((symbol, index) => (
        <Square symbol={symbol} key={index} />
      ))}
    </div>
  );
}

export default Board;