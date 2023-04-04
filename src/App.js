import { useState } from 'react';
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
function App() {

  const [gameStage,setStage] = useState(stages[0].name)


  //start gamer
  const startGamer = () => {
    setStage(stages[1].name)
  }
  
  //process the latter input
  const verifLetter = () => {
    setStage(stages[2].name)
  }

  // resetar gamer
  const retry = () => {
    setStage(stages[0].name)

  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGamer={startGamer}/>}
      {gameStage === "game" &&  <Game verifLetter={verifLetter}/>}
      {gameStage === "end" && <Over retry={retry}/>}
    </div>
  );
}

export default App;
