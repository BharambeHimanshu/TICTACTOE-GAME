import React from "react";

export default function Square({value}) {
    return(
        <>
        <button type="button" className="square">
        {value}
        </button>
        </>
    )
}