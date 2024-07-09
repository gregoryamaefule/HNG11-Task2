import redio from './assets/Redio.png'
import radio from './assets/Radio.png'
import close from './assets/Close.png'
import './Checkoutone.css'
import { Link } from 'react-router-dom';

function Checkoutone() {

  return (
    <>
      <div className="ccon">
        <div className="box">
            <div className="boxitem">
                <img src={redio} alt="" />
                <p>1# <br /> Address</p>
            </div>
            <div className="boxitem">
                <img src={radio} alt="" />
                <p style={{color: '#B2B2B2'}}>2# <br /> Payment</p>
            </div>
        </div>
        <div className="checkinfo1">
            <h2>Select Address</h2>
            <div className="addr">
                <p className="area">
                    <img src={redio} alt="" />
                </p>
                <div className="com">
                    <p>
                    15 Jesus Avenue. <br /> 15 Jesus Avenue. Port Harcourt, Rivers State 5227 <br /> (936) 361-0310</p>
                    
                </div>
                <span> 
                        <a href="">Edit</a>
                        <img src={close} alt="" />
                </span>
            </div>
            <div className="addr">
                <p className="area">
                    <img src={radio} alt="" />
                </p>
                <div className="com">
                    <p>
                    FCMB Bank <br /> 5 Jesus Avenue. Port Harcourt, Rivers State 5227 <br /> (+234) 901-035-3127</p>
                    
                </div>
                <span> 
                        <a href="">Edit</a>
                        <img src={close} alt="" />
                </span>
            </div>
            <a href="">Add New Address</a>
            <div className="buttons">
                <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Cart">Back</Link></button>
                <button style={{backgroundColor: 'black', color:"white"}}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Checkout2">Next</Link></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Checkoutone
