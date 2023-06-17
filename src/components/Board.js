import React from "react";
import Square from "./Square";

function Board() {
    return(
        <div className="board">
            <Square symbol="X" onClick={() => console.log("clicked")} />
            <Square symbol="O" onClick={() => console.log("clicked")} />
            <Square symbol="X" onClick={() => console.log("clicked")} />
        </div>
    );
}

export default Board;