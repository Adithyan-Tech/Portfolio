import React from 'react'
import './Navbar.css'
import logo from '/home/vishnu/Desktop/portfolio/porttfolio/src/assets/assets/logo.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
 <nav className='navbar' >
  <img src={logo} alt="logo"  className='logo'/>
  <div className="desktopMenu">
 <Link className="desktopMenuListIteams">Home</Link>
 <Link className="desktopMenuListIteams">Clint</Link>
 <Link className="desktopMenuListIteams">About</Link>
 <Link className="desktopMenuListIteams">portfolio</Link>

  </div>
<button className="desktopMenuBtn">
  <img src="" alt="" className="desktopMenuImg" />
   Contact Me
</button>

 </nav>

  )
}

export default Navbar
