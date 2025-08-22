import { useState } from 'react'
import GamePage from './GamePage'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import StartPage from './StartPage'


function App() {

  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<StartPage/>}/>  
      <Route path='/game' element={<GamePage/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
