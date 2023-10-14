import React from "react";
import "./About.css";
import UIDesign from "../assets/assets/ui-design.png";
import AppDesign from "../assets/assets/app-design.png";
import webdesign from "../assets/assets/website-design.png";
const About = () => {
  return (
    <div>
      <section id="Skills">
        <span className="SkillTitle">What i do</span>
        <span className="SkillDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          distinctio ut expedita suscipit consequatur ab id numquam modi nisi
          veritatis velit quam. Aut necessitatibus consequatur saepe amet vitae
          blanditiis deserunt.
          
            I am a skilled and passionate wweb developer
          
        </span>
        <div className="SkillBars">

        <div className="SkillBar">
          <img src={UIDesign} alt="uidesign" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>demo</h2>
            <p>this is demo text</p>
          </div>
        </div>

        <div className="SkillBar">
          <img src={AppDesign} alt="uidesign" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>demo</h2>
            <p>this is demo text</p>
          </div>
        </div>

        <div className="SkillBar">
          <img src={webdesign} alt="uidesign" className="skillBarImg" />
          <div className="SkillBarText">
            <h2>demo</h2>
            <p>this is demo text</p>
          </div>
        </div>
        </div>

      </section>
    </div>
  );
};

export default About;
