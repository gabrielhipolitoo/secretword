import React from 'react'
import "./GameOver.css"

const Over = ({retry}) => {
  return (
    <div>
        <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default Over