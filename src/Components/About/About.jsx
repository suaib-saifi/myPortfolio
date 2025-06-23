import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img2 from "../../assets/profile_img2.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a dedicated and creative full stack developer who enjoys
              building clean, responsive, and user-friendly websites. I've
              gained hands-on experience working with the MERN stack (MongoDB,
              Express.js, React.js, Node.js).
            </p>
            <p>
              My passion for full stack development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Express Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>BootStrap</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>TECH SKILLS MASTERED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>REAL-WORLD PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>CERTIFICATIONS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
