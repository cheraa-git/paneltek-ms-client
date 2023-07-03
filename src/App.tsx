import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/mainPage'
import { NavBar } from './components/navBar'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
