import React from "react";
import "./Card.css";
const Card = ({ icon, heading, text }) => {
  return (
    <div>
      <div className="card">
        <img src={icon} />
        <h2 className="card-heading">{heading}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
