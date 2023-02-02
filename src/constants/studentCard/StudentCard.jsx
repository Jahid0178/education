import React from "react";
import "./StudentCard.css";
const StudentCard = ({ profile, heading, text,  marks }) => {
  return (
    <div>
      <div className="student-card">
        <div className="profile-section">
          <img alt="profile" src={profile} className="profile-img" />
          <div className="profile-data">
            <h2 className="student-card-heading">{heading}</h2>
            <p className="student-card-marks">{marks}</p>
     </div>{" "}
        </div>{" "}
        <p className="student-card-text">{text}</p>
      </div>
    </div>
  );
};

export default StudentCard;
