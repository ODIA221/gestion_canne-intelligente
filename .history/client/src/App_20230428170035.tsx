import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inscription from './pages/Inscription'
import Admin from './pages/Admin'
import Archive from './pages/Archive'
import Modifmdp from './pages/Modifmdp'
import Sante from './pages/Sante'
import Deplacement from './pages/Deplacement'
import Donneconcerne from './pages/Donneconcerne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <Dashbord/>       
    </div>
  )
}

export default App
