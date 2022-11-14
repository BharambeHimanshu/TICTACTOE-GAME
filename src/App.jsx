import React from "react"
import Board from "./components/Board"
import "./Styles/root.scss"

export default function App() {
  return (
    <div className="app">
    <h1>Tic Tac Toe</h1>
    <Board /> 
    </div>
  )
}