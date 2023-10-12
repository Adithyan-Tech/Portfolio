import React from 'react'
import './intro.css'
import profilePicture from '../assets/assets/image.png'
import {Link} from 'react-scroll'
import hire from "../assets/assets/hireme.png"

const Intro = () => {
  return (
   <section className="intro">
    <div className="introContent">
      <span className='hello'>Hello,</span>
      <span className='itrotext'>I'am <span className='name'>Adithyan</span>Website Designer
</span>
<p className='intropara'>i am a skilled and passionate  web designer</p>

<Link>
<button className='btn'><img src={hire} alt='hire me'/>Hire Me</button></Link>

    </div>
       <img src={profilePicture} alt="intropicture" className="bg" />
   </section>
  )
}

export default Intro
