import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Alphabet from './components/pages/Alphabet'
import Greeting from './components/pages/Greeting'
import Numbers from './components/pages/Numbers'
import Days from './components/pages/Days'


function App() {
  
  return (
    <>
    <BrowserRouter>
        <main>
        <Header />
            <Routes>
              
              <Route path="/" element = {<Hero />}/ >
              <Route path="alphabet" element = {<Alphabet />} />
              <Route path="greeting" element = {<Greeting />} />
              <Route path="number" element = {<Numbers />} />
              <Route path="days" element = {<Days />} />
            </Routes>
          
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
