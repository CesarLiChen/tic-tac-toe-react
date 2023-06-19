import React from "react";

function Square(props) {

  return (
    <div
      className="square"
      onClick={() => props.onSquareClick()}
    >
      {props.symbol}
    </div>
  );
}

export default Square;