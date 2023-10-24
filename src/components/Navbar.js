import React from 'react'
import './Navbar.css'
import logo from '/home/vishnu/Desktop/portfolio/porttfolio/src/assets/assets/logo.png'
import {Link} from 'react-scroll'
import  messege from '../assets/assets/contact.png'
const Navbar = () => {
  return (
 <nav className='navbar' >
  <img src={logo} alt="logo"  className='logo'/>
  <div className="desktopMenu">
 <Link activeClass='active' to='intro'className="desktopMenuListIteams">Home</Link>
 <Link activeClass='active' to='works'className="desktopMenuListIteams">portfolio</Link>

 <Link activeClass='active' to='Skills'className="desktopMenuListIteams">About</Link>
 <Link activeClass='active' to='clints'className="desktopMenuListIteams">Clint</Link>


  </div>
<button className="desktopMenuBtn">
  <img src={messege} alt="" className="desktopMenuImg" />
   Contact Me
</button>

 </nav>

  )
}

export default Navbar
