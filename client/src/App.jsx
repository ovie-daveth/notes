import { useState } from 'react'
import './App.css'

import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Login from './pages/auth/Login'


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
