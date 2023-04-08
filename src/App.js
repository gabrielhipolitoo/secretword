import { useEffect, useState } from 'react';
import './App.css';
// Compponentes
import StartScreen from './Componentes/StartScreen';
import Game from './Componentes/Game'
import Over from './Componentes/Over'

// data
import { palavras } from './Data/Palavras';


const stages = [
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"}
]

const gussesQty = 3

function App() {

  const [gameStage,setStage] = useState(stages[0].name)
  const [words] = useState(palavras)

  const [PickedWord,setPickedWord] = useState()
  const [PickedCategory,setPickedCategory] = useState()
  const [letter,setLetter] = useState([])

  const [guessedLetters,setGuessdLetters] = useState([])
  const [wrongLetters,setWrongLetters] = useState([])
  const [guesses,setGuesses] = useState(gussesQty)
  const [score,seScore] = useState()

  const picWordAndCategory = () =>{
    const categorias = Object.keys(words)
    const category =  categorias[Math.floor(Math.random() * Object.keys(categorias).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }
  //start gamer
  const startGamer = () => {
    const {word, category} = picWordAndCategory()

    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    setPickedWord(word)
    setPickedCategory(category)
    setLetter(wordLetters)
    setStage(stages[1].name)

  }
    console.log(letter)
  
  //process the latter input
  const verifLetter = (letters) => {
   
    const normalizedLetter = letters.toLowerCase()

    if(
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    )
    {
      return
    }

    if(letter.includes(normalizedLetter)){
      setGuessdLetters((prevState) => 
        [
          ...prevState,
          normalizedLetter
        ]
      )
    } else{
      setWrongLetters((prevState => [
        ...prevState,
        normalizedLetter
      ]))

      setGuesses((prevState) => prevState - 1)
    }
  
  }

  const cleanData = ()  => {
    setGuessdLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses<=0){
      setStage(stages[2].name)
    }
  },[guesses])
  // resetar gamer
  const retry = () => {
    setStage(stages[0].name)
    setGuesses(gussesQty)

  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGamer={startGamer}/>}
      {gameStage === "game" &&  <Game 
      PickedWord={PickedWord} 
      PickedCategory={PickedCategory} 
      letter={letter} 
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      verifLetter={verifLetter}/>}
      {gameStage === "end" && <Over retry={retry}/>}
    </div>
  );
}

export default App;
