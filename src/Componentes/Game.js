import React, { useState,useRef } from 'react'
import "./Game.css"

const Game = ({verifLetter,pickedWord,PickedCategory,letter,guessedLetters,wrongLetters,guesses,score}) => {


  const [letters,setletters] = useState()
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    verifLetter(letters)
    setletters("")
    letterInputRef.current.focus()
  }

  return (
    <div className='game'>
        <p className='points'>
          <span>Pontuação:{score}</span>
        </p>
        <h1>Adivinhe a palavra</h1>
        <h3 className='tip'>
          <span>Dica:{PickedCategory}</span>
        </h3>
        <p>Voce ainda tem {guesses} tentativas</p>
        <div className="wordContainer">
          {letter.map((letter,i) => (
            guessedLetters.includes(letter) ? (
                <span key={i} className='letter'>{letter}</span>
            ):(
              <span key={i} className='blankSquare'></span>
            )
          ))}
        </div>
        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name='letter' maxLength="1" onChange={(e) => setletters(e.target.value)} value={letters || ""} ref={letterInputRef} required/>
            <button>Jogar</button>
          </form>
        </div>
        <div className="wrongLetterContainer">
          <p>Letras usadas:</p>
          {wrongLetters.map((letter,i) => (
            <span key={i}>{letter},</span>
          ))}
        </div>
    </div>
  )
}

export default Game