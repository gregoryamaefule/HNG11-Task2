import './CT.css'
import { Link } from 'react-router-dom';
import lmc from './assets/lmc.jpeg'
import dpc from './assets/dpc.jpeg'
import eltt from './assets/eltt.jpeg'
import close from './assets/Close.png'

function Hero() {

  return (
    <>
      <div className="cart">
        <div className="mycart">
            <h2>My Cart</h2>
            <ul className="cartitems">
                <li className="cartitem">
                    <div className="ip">
                        <img src={dpc} alt="" />
                        <p>Dropping Pendant Wall Led Light.</p>
                    </div>
                    <div className="is">
                        <span>-<button>1</button>+</span>
                        <p>₦ 48,999</p>
                        <button><img src={close} alt="" /></button>
                    </div>
                </li>
                <li className="cartitem">
                    <div className="ip">
                        <img src={lmc} alt="" />
                        <p>LED Chandelier, Pendant, Dropping Lighting </p>
                    </div>
                    <div className="is">
                        <span>-<button>1</button>+</span>
                        <p>₦ 68,999</p>
                        <button><img src={close} alt="" /></button>
                    </div>
                </li>
                <li className="cartitem">
                    <div className="ip">
                        <img src={eltt} alt="" />
                        <p>Executive Chandalier Crystal Lighting</p>
                    </div>
                    <div className="is">
                        <span>-<button>1</button>+</span>
                        <p>₦ 98,999</p>
                        <button><img src={close} alt="" /></button>
                    </div>
                </li>
            </ul>

        </div>
        <div className="os">
            <h2>Order Summary</h2>

            <div className="osc">
                <h3>Subtotal</h3>
                <span>₦ 216,997</span>
            </div>
            <div className="osc">
                <h3 style={{color: '#545454'}}>Delivery Fee</h3>
                <span>₦ 5,000</span>
            </div>
            <div className="osc">
                <h3>Total</h3>
                <span>₦ 221,997</span>
            </div>
            <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Checkout1">Checkout</Link></button>

        </div>
      </div>
    </>
  )
}

export default Hero
