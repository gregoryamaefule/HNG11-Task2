import ssbanner from './assets/summersale.jpeg'
import './Summersale.css'

function Summersale() {

  return (
    <>
      <div className="Summersale" style={{backgroundImage: `url(${ssbanner})`}}>
        <h1>Epic Summer Sale</h1>
        <p>Do Not Miss Out</p>
        <button>Shop Now</button>
        <div></div>
      </div>
    </>
  )
}

export default Summersale
