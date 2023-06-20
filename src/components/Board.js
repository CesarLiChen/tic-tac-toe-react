import React from "react";
import Square from "./Square";

function Board(props) {
  console.log(props.board);

  return (
    <div className="board">
      {props.board.map((symbol, index) => (
        <Square 
          id={index}
          symbol={symbol} 
          key={index} 
          onSquareClick={() => props.onBoardClick(index)} 
        />
      ))}
    </div>
  );
}

export default Board;