import ssbanner from './assets/summersale.jpeg'
import './Summersale.css'
import { Link } from 'react-router-dom';

function Summersale() {

  return (
    <>
      <div className="Summersale" style={{backgroundImage: `url(${ssbanner})`}}>
        <h1>Epic Summer Sale</h1>
        <p>Do Not Miss Out</p>
        <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/ProductListing">Shop Now</Link></button>
        <div></div>
      </div>
    </>
  )
}

export default Summersale
