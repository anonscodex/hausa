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
import Months from './components/pages/Months'
import Times from './components/pages/Times'
import Progress from './components/Progress'
import Nouns from './components/pages/Nouns'



function App() {
  
  const[progress, setProgress] = useState(0)

  return (
    <>
    <BrowserRouter>
        <main>

        <Header />
        <Progress progress={progress} />
            <Routes>
            
              <Route path="/" element = {<Hero />}/ >
              <Route path="alphabet" element = {<Alphabet setProgress={setProgress}/>} />
              <Route path="greeting" element = {<Greeting setProgress={setProgress}/>} />
              <Route path="number" element = {<Numbers setProgress={setProgress}/>} />
              <Route path="days" element = {<Days setProgress={setProgress}/>} />
              <Route path='months' element = {<Months setProgress={setProgress}/>} />
              <Route path='time' element = {<Times setProgress={setProgress}/>} />
              <Route path='nouns' element = {<Nouns setProgress={setProgress}/>} />
            </Routes>
          
        </main>
      </BrowserRouter>
      
    </>
  )
}

export default App
