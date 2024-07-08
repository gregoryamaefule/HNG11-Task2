import arrow from './assets/Arrow.png'
import chandeler from './assets/chandelers.jpeg'
import bedsidelamp from './assets/bedsidelamps.jpeg'
import blackAl from './assets/blackAl.jpeg'
import droppinglights from './assets/Droppinglights.jpeg'
import './Category.css'

function Category() {

  return (
    <>
      <div className="cat">
        <h2>Shop By Category</h2>
        <div className="span">
            <span><img src={arrow} alt="" /></span>
        </div>
        <ul className="cats">
            <li className='con' style={{backgroundImage: `url(${chandeler})`}}> <p>Chandelers</p> <div></div></li>
            <li className='con' style={{backgroundImage: `url(${bedsidelamp})`}}> <p>Bedside Lamps</p> <div></div></li>
            <li className='con' style={{backgroundImage: `url(${droppinglights})`}}> <p>Dropping Lights</p> <div></div></li>
            <li className='con' style={{backgroundImage: `url(${blackAl})`}}> <p>Outdoor Lights</p> <div></div></li>
        </ul>
      </div>
    </>
  )
}

export default Category
