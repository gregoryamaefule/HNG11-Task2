import bgHero from './assets/banner.jpeg'
import './Hero.css'
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <>
      <div className='hero' style={{backgroundImage:`url(${bgHero})`}}>
        <h1>IFYTHEL LIGHTS</h1>
        <p>Light Up Your Homes</p>
        <button> <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/ProductListing">Shop Now</Link> </button>
        <div className="overlay"></div>
      </div>
    </>
  )
}

export default Hero
