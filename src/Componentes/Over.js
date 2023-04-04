import React from 'react'
import "./GameOver.css"

const Over = ({retry}) => {
  return (
    <div>
      <h1>Gamer Over</h1>
      <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default Over