
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import good from './assets/goodmark.png'
import {Link} from 'react-router-dom'

import './Confirmation.css'

function Confirmation() {

  return (
    <>
      <Header />
      <div className="confirm">
        <h2>Payment Confirmation</h2>
        <img src={good} alt="" />
        <div className="buttons">
            <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Back to Home</Link></button>
            <button style={{backgroundColor:"black", color:'white'}}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Cart">Order Again</Link></button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Confirmation
