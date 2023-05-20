
import './App.css'
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
 import TB from './pages/TB'
 import Auth from './pages/Auth'
 import ProtectionRoutes from './pages/ProtectionRoutes'
 
 
function App() {


  return (
    <div className='pages'>
    <>
    <Routes>
            <Route index path="/" element={<Connexion/>} />
            <Route path='/Dashbord' element={<Auth><Dashbord/></Auth>}>
              <Route path='Archive' element={<Auth><Archive/></Auth>}/>
              <Route path='Admin' element={<Auth><Admin/></Auth>}/>
              <Route path='Deplacement' element={<Auth><Deplacement/></Auth>}/>
              <Route path='Inscription' element={<Auth><Inscription/></Auth>}/>
              {/* <Route path='Sante' element={<Sante/>}/> */}
              <Route path='Modifmdp' element={<Auth><Modifmdp/></Auth>}/>
              <Route path='Donneconcerne' element={<Auth><Donneconcerne/></Auth>}/>
              <Route path='TB' element={<Auth>TB</Auth>}/>

           </Route>
           <Route path="*" element={<ProtectionRoutes />} />

    </Routes>
    </>
  </div>
  )
}

export default App
