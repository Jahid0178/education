import React from "react";
import "./Universities.css";
import Cornell from "../../assets/university/cornell-university.png";
import Wharton from "../../assets/university/wharton-university.png";
import Illinois from "../../assets/university/illinois-university.jpg";
import NorthWestern from "../../assets/university/northwestern-university.png";
import Duke from "../../assets/university/duke-university.png";
import Newyork from "../../assets/university/newyork-university.png";
import Michigan from "../../assets/university/michigan-university.png";
import Berkeley from "../../assets/university/berkeley-university.png";
import Usc from "../../assets/university/usc-university.png";
import Rice from "../../assets/university/rice-university.png";
import Uc from "../../assets/university/ucsandiego-university.png";

const Universities = () => {
  return (
    <div className="university">
      <h1 className="university-heading">OUR STUDENTS ARE ENROLLED TO</h1>
      <div className="uni-section">
        <img alt="uni-logo" className="uni-logo" src={Cornell} />
        <img alt="uni-logo" className="uni-logo" src={Wharton} />
        <img alt="uni-logo" className="uni-logo" src={Illinois} />
        <img alt="uni-logo" className="uni-logo" src={Michigan} />
      </div>
      <div className="uni-section-two">
        <img alt="uni-logo" className="uni-logo" src={Duke} />
        <img alt="uni-logo" className="uni-logo" src={Newyork} />
        <img alt="uni-logo" className="uni-logo" src={NorthWestern} />
        <img alt="uni-logo" className="uni-logo" src={Berkeley} />
      </div>
      <div className="uni-section-three">
        <img alt="uni-logo" className="uni-logo" src={Usc} />
        <img alt="uni-logo" className="uni-logo" src={Uc} />
        <img alt="uni-logo" className="uni-logo" src={Rice} />
      </div>
    </div>
  );
};

export default Universities;
