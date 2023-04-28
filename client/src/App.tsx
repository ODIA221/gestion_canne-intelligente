import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Connexion/>       
    </div>
  )
}

export default App
