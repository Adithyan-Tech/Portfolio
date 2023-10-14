import React from "react";
import "./works.css";
import portfolio1 from '../assets/assets/portfolio-1.png'
import portfolio2 from '../assets/assets/portfolio-2.png'
import portfolio3 from '../assets/assets/portfolio-3.png'
import portfolio4 from '../assets/assets/portfolio-4.png'
import portfolio5 from '../assets/assets/portfolio-5.png'
import portfolio6 from '../assets/assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="workDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis
        cupiditate, blanditiis labore ratione, veritatis mollitia qui omnis
        dolore error perspiciatis doloribus cum magnam deserunt provident nihil
        iste, consequuntur perferendis?
      </span>
      <div className="worksimg">
        <img src={portfolio1} alt="portfolio1" className="workImg" />
        <img src={portfolio2} alt="portfolio2" className="workImg" />
        <img src={portfolio3} alt="portfolio3" className="workImg" />
        <img src={portfolio4} alt="portfolio4" className="workImg" />
        <img src={portfolio5} alt="portfolio5" className="workImg" />
        <img src={portfolio6} alt="portfolio6" className="workImg" />

      </div>
    </section>
  );
};

export default Works;
