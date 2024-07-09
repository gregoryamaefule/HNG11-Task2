import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx'
import ProductListing from './ProductListing.jsx'
import Cart from './Cart.jsx'
import Checkout1 from './Checkout1.jsx'
import Checkout2 from './Checkout2.jsx'
import Confirmation from './Confirmation.jsx'
import './App.css'

function App() {

  return (

<Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout1" element={<Checkout1 />} />
          <Route path="/Checkout2" element={<Checkout2 />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Routes>
      </div>
</Router>
  )
}

export default App
