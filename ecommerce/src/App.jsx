import { useState } from 'react'
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
    <>
      {isHome && <Home onHomeClick={handleHome}/>}
      {isPL && <ProductListing onSNClick={handleIsPL}/>}
    </>
  )
}

export default App
