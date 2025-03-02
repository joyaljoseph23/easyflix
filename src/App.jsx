// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
        <main className='main-content'>
      <Favorites/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Favorites/>}/>
          
         
        </Routes>
    </main>
    </div>
    
    
   
      
  );
}



export default App
