import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const educationData = [
  {
    degree: "B.Tech (CSE-DS)",
    institution: "RD Engineering College Duhai Ghaziabad",
    duration: "2022 - 2025",
    grade: "CGPA: 7.5/10",
  },
  {
    degree: "Diploma in Electronics",
    institution: "Government Polytechnic Ghaziabad",
    duration: "2019 - 2022",
    grade: "75% Marks",
  },
  {
    degree: "Intermediate",
    institution: "Adhyatmik Nagar Inter College Ghaziabad",
    duration: "2019 - 2022",
    grade: "70% Marks",
  },
];

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <h2>{item.degree}</h2>
            <p className="institution">{item.institution}</p>
            <p className="duration">{item.duration}</p>
            <p className="grade">{item.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
