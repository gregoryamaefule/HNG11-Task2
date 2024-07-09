import bai from './assets/bai.jpeg'
import trackinglight from './assets/trackinglights.jpeg'
import ceilinglight from './assets/ceilinglights.jpeg'
import './Newin.css'
import { Link } from 'react-router-dom';

function Newin() {

  

  return (
    <>
      <div className="newin">
        <h2><span>New In</span></h2>
        <div className="products">
            <div className="product">
                <img src={bai} alt="" />
                <h1>Outdoor Lights</h1>
                <p>Durable outdoor light with a weather-resistant design, ideal for illuminating patios and garden areas.</p>
                <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/ProductListing">Shop Now</Link></button>
            </div>
            <div style={{backgroundColor: 'inherit'}} className="product">
                <img src={trackinglight} alt="" />
                <h1>Track Lights</h1>
                <p>Adjustable LED track light with a modern finish, perfect for versatile and energy-efficient illumination.</p>
                <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/ProductListing">Shop Now</Link></button>
            </div>
            <div className="product">
                <img src={ceilinglight} alt="" />
                <h1>Ceiling Fittings</h1>
                <p>Elegant ceiling fitting light with a sleek design, providing bright and stylish illumination for any room.</p>
                <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/ProductListing">Shop Now</Link></button>

            </div>
        </div>
      </div>
    </>
  )
}

export default Newin
