import React from "react";
import "./EnrollSection.css";
import GraduateStudent from "../../assets/graduating-student.png";
import Student from "../../assets/graduate.png";
import Passport from "../../assets/passport.png";
const EnrollSection = () => {
  return (
    <div className="enroll-section">
      <h1 className="enroll-heading">Who Can Enroll in this Section</h1>
      <div className="enroll-section-main">
        <img alt="graduate-student" src={GraduateStudent} className="graduate-student-img" />
        <p className="enroll-text">
          High School students who are looking to study in the best lvy League
          Schools
        </p>
      </div>
      <div className="enroll-section-main">
        <img alt="student" src={Student} className="student-cap" />
        <p className="enroll-text">
          Students looking to get the best possible SAT scores to be eligible
          for scholarships
        </p>
      </div>
      <div className="enroll-section-main">
        <img alt="passport" src={Passport} className="graduate-student-img" />
        <p className="enroll-text">
          Students Who are exploring undergraduate universities in the US, Canada and Europe
        </p>
      </div>
    </div>
  );
};

export default EnrollSection;
