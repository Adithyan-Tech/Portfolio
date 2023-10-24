import React from "react";
import "./clint.css";
import walmart from '../assets/assets/walmart.png';
import Adobe from '../assets/assets/adobe.png';
import microsoft from '../assets/assets/microsoft.png';
import facebook from '../assets/assets/facebook.png';
import facbookicon from '../assets/assets/facebook-icon.png';
import twittericon from '../assets/assets/twitter.png';
import instagramicon from '../assets/assets/instagram.png';

const Clint = () => {
  return (
    <div>
      <section id="contactpage">
        <div id="clints">
          <h1 className="contactPageTitle">MY CLINTS</h1>
          <p className="clintDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            quaerat perferendis ex porro enim doloremque laborum accusantium
            soluta alias nostrum! Veniam doloremque ea molestiae laborum quia
            consectetur vitae perferendis est.
          </p>
          <div className="clintImgs">
            <img src={walmart} alt="walmart" className="clintImg" />
            <img src={Adobe} alt="Adobe" className="clintImg" />
            <img src={microsoft} alt="microsoft" className="clintImg" />
            <img src={facebook} alt="facebook" className="clintImg" />
          </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Conatct Me</h1>
          <span className="contactDesc"> please fill the fom below to discuss any work oppertunities.</span>
          <form className="contactForm">
            <input type="text" className="name" placeholder="enter name"/>
            <input type="text" className="email" placeholder="enter email" />
            <textarea  className='msg'name="message" rows='5'placeholder="your message"></textarea>
            <button className="submit" type="submit" value='send'></button>
            <div className="links">
             <img src={facbookicon} alt='facbookicon' className="link"></img>
             <img src={twittericon} alt='twittericon' className="link"></img>
             <img src={instagramicon} alt='instagramicon' className="link"></img>
            </div>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Clint;
