import React from "react";
import Square from "./Square";

function Board(props) {
  console.log(props.board);

  function clicked(symbol, index) {
    console.log("Clikky => " + symbol , index);
  }

  return (
    <div className="board">
      {props.board.map((symbol, index) => (
        <Square 
          id={index}
          symbol={symbol} 
          key={index} 
          onClicked={clicked} 
        />
      ))}
    </div>
  );
}

export default Board;