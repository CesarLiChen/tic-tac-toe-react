import React from "react";

function Square(props) {

  return (
    <div
      className="square"
      onClick={() => props.onClicked(props.symbol, props.id)}
    >
      {props.symbol}
    </div>
  );
}

export default Square;