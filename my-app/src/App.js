import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Create from './pages/create'
import Home from './pages/home'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
    </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App