import { useState } from 'react'
import loveLogo from './assets/Vector.png'
import cartLogo from './assets/Cart1.png'
import profileLogo from './assets/profile.png'
import hm from './assets/Burger.png'
import './Header.css'

import { Link } from 'react-router-dom';

function Header() {
  const [menuOn, setMenuOn] = useState(0);

  const menuOnStyle = {
    display: 'block'
  };

  function handleHmClick() {
    setMenuOn(1)
  }
  function handleCnClick() {
    setMenuOn(0)
  }

  return (
    <>
      <div className='header'>
        <h1>IFYTHEL LIGHTS</h1>
        <input type="search" name="search" id="search" placeholder='🔍   Search' />
        <ul className='text'>
            <li className='active' > <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link> </li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <ul className="icon">
            <li><img src={loveLogo} alt="" /></li>
            <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Cart"><img src={cartLogo} alt="" /></Link></li>
            <li><img src={profileLogo} alt="" /></li>
        </ul>
        <div className="hm" onClick={handleHmClick}>
          <img src={hm} alt="" />
        </div>
        <div className="mm" style={menuOn ? menuOnStyle : {}}>
          <span className="cancel" onClick={handleCnClick}>
            X
          </span>
          <ul className='mtext'>
              <li className='active'><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></li>
              <li>About</li>
              <li>Contact Us</li>
          </ul>
          <ul className="micon">
              <li><img src={loveLogo} alt="" /></li>
              <li><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Cart"><img src={cartLogo} alt="" /></Link></li>
              <li><img src={profileLogo} alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
