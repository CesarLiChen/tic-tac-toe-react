import React from "react";

function Square(props) {
  return (
    <div
      className="square"
      onClick={() => props.onClick()}
    >
      {props.symbol}
    </div>
  );
}

export default Square;