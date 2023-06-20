import React from "react";

function WinnerModal(props) {
    return (
        <div className="modal">
            <div className="modal-content">
                {props.winner} Wins!
            </div>
        </div>
    );
}

export default WinnerModal;