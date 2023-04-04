import React from 'react'
import "./StartScreen.css"

const StartScreen = ({startGamer}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão para comecar</p>
        <button onClick={startGamer}>Começar jogo</button>
    </div>
  )
}

export default StartScreen