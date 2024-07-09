import redio from './assets/Redio.png'
import radio from './assets/Radio.png'
import lmc from './assets/lmc.jpeg'
import drc from './assets/drc.jpeg'
import pdl from './assets/pdl.jpeg'
import './Checkouttwo.css'
import { Link } from 'react-router-dom';

function Checkouttwo() {

  return (
    <>
      <div className="ccon">
        <div className="box">
            <div className="boxitem">
                <img src={radio} alt="" />
                <p style={{color: '#B2B2B2'}}>1# <br /> Address</p>
            </div>
            <div className="boxitem">
                <img src={redio} alt="" />
                <p >2# <br /> Payment</p>
            </div>
        </div>
        <div className="checkinfo">
           <div className="sum">
            <h2>Summary</h2>
            <div className="sumitem">
                
                <p> <img src={lmc} alt="" /> <span>Dropping Pendant Wall Led Light.</span></p>
                <span>₦ 48,999</span>
            </div>
            <div className="sumitem">
                
                <p> <img src={drc} alt="" /> <span>LED Chandelier, Pendant, Dropping Lighting</span> </p>
                <span>₦ 68,9999</span>
            </div>
            <div className="sumitem">
                
                <p> <img src={pdl} alt="" /> <span>Executive Chandalier Crystal Lighting</span></p>
                <span>₦ 98,999</span>
            </div>
            <h3>Address</h3>
            <p>15 Jesus Avenue. Port Harcourt, Rivers State 5227</p>
            <h3>Delivery Dates</h3>
            <p>15 - 20 July 2024</p>
            <div className="summ">
                <h4>Subtotal</h4>
                <span>₦ 216,997</span>
            </div>
            <div className="summ">
                <h4 style={{color:"#545454"}}>Delivery Fee</h4>
                <span>₦ 5,000</span>
            </div>
            <div className="summ">
                <h4 >Total</h4>
                <span>₦ 221,997</span>
            </div>
           </div>
           <div className="pay">
            <h3>Payment</h3>
            <p>
                <img src={redio} alt="" /> Card Payment
            </p>
            <p>
                <img src={radio} alt="" /> Bank Transfer
            </p>
            <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Checkout1">Back</Link></button>
            <button style={{backgroundColor:"black", color:"white"}}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Confirmation">Pay</Link></button>
           </div>
        </div>
      </div>
    </>
  )
}

export default Checkouttwo
