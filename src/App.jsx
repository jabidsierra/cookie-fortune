import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FortuneCard from './components/FortuneCard'
import phrases from './data/phrases.json'

function App() {

  const [index, setIntdex] = useState(0)
  const [indexBack, setIndexBack] = useState(0)
  const background = ["url(fondo1.jpg)", "url(fondo2.jpg)", "url(fondo3.jpg)", "url(fondo4.jpg)"]
  const changePhrase = () => {
    if (index === phrases.length - 1) {
      setIntdex(0)
    }else{
      setIntdex( index + 1)
    }
  } 
  const changeBack = () => {
    if (indexBack === background.length - 1) {
      setIndexBack(0)
    }else{
      setIndexBack( indexBack + 1)
    }
  } 
  return (
    <div className="App" style={{backgroundImage:background[indexBack]}}>
      <FortuneCard phraseData = {phrases[index]} />
      <button onClick={()=>{changePhrase(),changeBack()}}>¡Abre otra galleta!</button>
    </div>
  )
}

export default App
