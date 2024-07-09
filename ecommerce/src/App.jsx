import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx'
import ProductListing from './ProductListing.jsx'
import './App.css'

function App() {
  const [isHome, setIsHome] = useState(false)
  const [isPL, setIsPL] = useState(true)

  function handleHome() {
    setIsHome(true)
    setIsPL(false)
  }
  function handleIsPL() {
    setIsHome(false)
    setIsPL(true)
  }

  return (

<Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
        </Routes>
      </div>
</Router>
  )
}

export default App
