import cDown from './assets/cd.png'
import like from './assets/Like.png'
import CC from './assets/cyc.jpeg'
import drc from './assets/drc.jpeg'
import pdl from './assets/pdl.jpeg'
import dpcl from './assets/dpcl.jpeg'
import eltt from './assets/eltt.jpeg'
import scl from './assets/scl.jpeg'
import lmc from './assets/lmc.jpeg'
import pag from './assets/Pagination.png'
import dpc from './assets/dpc.jpeg'
import lc from './assets/lc.jpeg'
import './ProductList.css'

function ProductList() {

  return (
    <>
      <div className="prod">
        <p> <span style={{paddingLeft: '0'}}>Home</span> &gt; <span>Categories</span> &gt; <span style={{color: '#000000'}} className='active'>Chandellers</span> </p>

        <div className="prodcon">
            <div className="pch">
                <p style={{color: '#A4A4A4'}}>Selected Products: <span>45</span></p>
                <button>By price <img src={cDown} alt="" /></button>
            </div>
            <ul className="listprod">
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={CC} alt="" /></span>
                    <h3>Crystal Chandelier</h3>
                    <h2>₦ 190,000</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={drc} alt="" /></span>
                    <h3>Dropping Chandelier Wall Led Light</h3>
                    <h2>₦ 39,000</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={pdl} alt="" /></span>
                    <h3>Chandelier, Pendant, Dropping Lighting</h3>
                    <h2>₦ 57,000</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={dpcl} alt="" /></span>
                    <h3>Chandelier, Pendant, Dropping Lighting</h3>
                    <h2>₦ 54,000</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={eltt} alt="" /></span>
                    <h3>Elizebeth Layered Two-Tier Crystal Chandelier</h3>
                    <h2>₦ 540,000</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={scl} alt="" /></span>
                    <h3>Steel chandelier, lightings, dropping, pendant light</h3>
                    <h2>₦ 34,999</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={lmc} alt="" /></span>
                    <h3>LED Multi color Chandelier</h3>
                    <h2>₦ 140,000</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={dpc} alt="" /></span>
                    <h3>Dropping Pendant Wall Led Light.</h3>
                    <h2>₦ 260,000</h2>
                    <button>Add To Cart</button>
                </li>
                <li className="lpitem">
                    <img src={like} alt="" />
                    <span><img src={lc} alt="" /></span>
                    <h3>LED Chandelier</h3>
                    <h2>₦ 160,000</h2>
                    <button>Add To Cart</button>
                </li>
            </ul>
            <div className="pag">
                <img src={pag} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
