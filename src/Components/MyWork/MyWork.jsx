import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project1_img from "../../assets/project1.png";
import project2_img from "../../assets/project2.png";
import project3_img from "../../assets/project3.png";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="mywork-container">
        <a href="https://nestgo.onrender.com/listings">
          <div className="box">
            <img src={project1_img} alt="" />
          </div>
        </a>
        <a href="https://zayka-zone-ur86.vercel.app/">
          <div className="box">
            <img src={project2_img} alt="" />
          </div>
        </a>
        <a href="https://virtualr-sage.vercel.app/">
          <div className="box">
            <img src={project3_img} alt="" />
          </div>
        </a>
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img className="project" src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
