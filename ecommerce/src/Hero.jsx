import bgHero from './assets/banner.jpeg'
import './Hero.css'

function Hero() {

  return (
    <>
      <div className='hero' style={{backgroundImage:`url(${bgHero})`}}>
        <h1>IFYTHEL LIGHTS</h1>
        <p>Light Up Your Homes</p>
        <button>Shop Now</button>
        <div className="overlay"></div>
      </div>
    </>
  )
}

export default Hero
