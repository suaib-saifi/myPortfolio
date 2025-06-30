import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project1_img from "../../assets/project1.png";
import project2_img from "../../assets/project2.png";
import project3_img from "../../assets/project3.png";
import project4_img from "../../assets/project4.png";
import project5_img from "../../assets/project5.png";
import project6_img from "../../assets/project6.png";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="mywork-container">
        <a href="https://nestgo.onrender.com/listings">
          <div className="box">
            <img src={project1_img} alt="" />
          </div>
        </a>
        <a href="https://spotify-ui-clone-theta.vercel.app/">
          <div className="box">
            <img src={project4_img} alt="" />
          </div>
        </a>

        <a href="https://restaura-wheat.vercel.app/">
          <div className="box">
            <img src={project5_img} alt="" />
          </div>
        </a>

        <a href="https://vastu-spaze-one.vercel.app/">
          <div className="box">
            <img src={project6_img} alt="" />
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
