import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LendBook from './pages/LendBook'
import Request from './pages/Request'
import Contact from './pages/Contact'
import Auth from './Autorisation/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Auth />
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lend" element={<LendBook/>} />
        <Route path="/books" element={<Request/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> */}

      
    </>
  )
}

export default App
