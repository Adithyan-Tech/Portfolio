import React from "react";
import "./clint.css";
import walmart from '../assets/assets/walmart.png';
import Adobe from '../assets/assets/adobe.png';
import microsoft from '../assets/assets/microsoft.png';
import facebook from '../assets/assets/facebook.png';
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
        <div id="contact"></div>
      </section>
    </div>
  );
};

export default Clint;
