import React from "react";

export default function StatusMessage ({ winner, current }) { 

    const noMovesLeft = current.board.every((el)=> el !== null)
    return(
        <>
        <h2>
        { winner && `Winner is ${winner}`}
        {!winner && !noMovesLeft && `Next player is ${current.isXNext ? "X" : "O"}`}
        {!winner && noMovesLeft && 'Draw'}
        </h2>
        </>
    )
}