import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx'
import ProductListing from './ProductListing.jsx'
import Cart from './Cart.jsx'
import './App.css'

function App() {

  return (

<Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
</Router>
  )
}

export default App
