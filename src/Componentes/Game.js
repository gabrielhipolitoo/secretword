import React from 'react'
import "./Game.css"
const Game = ({verifLetter}) => {
  return (
    <div>
        <button onClick={verifLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game