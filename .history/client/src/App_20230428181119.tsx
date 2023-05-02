
import './App.css'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Inscription from './pages/Inscription'
import Admin from './pages/Admin'
import Archive from './pages/Archive'
import Modifmdp from './pages/Modifmdp'
import Sante from './pages/Sante'
import Deplacement from './pages/Deplacement'
import Donneconcerne from './pages/Donneconcerne'
import Dashbord from './pages/Dashbord'
import { Route, Routes } from 'react-router-dom'
import Connexion from './pages/Connexion'

function App() {


  return (
    <div className='pages'>
    <>
    <Routes>
            <Route index path="/" element={<Connexion/>} />
            <Route path='/Dashbord' element={<Dashbord/>}>
            <Route path='Archive' element={<Archive/>}>
            <Route path='Admin' element={<Admin/>}>
            <Route path='Deplacement' element={<Deplacement/>} />
            <Route path='Inscription' element={<Inscription/>}/>
            <Route path='Sante' element={<Sante/>}/>
            <Route path='Modifmdp' element={<Modifmdp/>}/>
            <Route path='Donneconcerne' element={<Donneconcerne/>}/>
        </Route>

    </Routes>
    </>
  </div>
  )
}

export default App
