import React from "react";

export default function Square({value, onClick , isWinningSquare}) {
    return(
        <>
        <button type="button" 
         className="square" 
         onClick={onClick} 
         style={{fontweight : isWinningSquare ? 'bold' : 'normal'}}
        >
         {value}
        </button>
        </>
    )
}