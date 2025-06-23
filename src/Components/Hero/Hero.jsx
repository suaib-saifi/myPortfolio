import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Suaib Saifi,</span> full stack <br /> web developer
      </h1>
      <p>
        I am a full stack web developer with expertise in front-end and back-end
        development. Skilled in designing and developing responsive,
        user-friendly web application with a focus on performance and
        scalability.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a href="https://drive.google.com/file/d/1uN5TL0CQPe5llWNl0mvM1ImTjcaVEf86/view?usp=sharing">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};
