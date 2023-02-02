import React from "react";
import "./CardSection.css";
import Card from "../../constants/Card/Card";
import { BiMessage, BiBookmark } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { AiOutlineFlag } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import One from "../../assets/carIcons/one.png";
import Two from "../../assets/carIcons/two.png";
import Three from "../../assets/carIcons/three.png";
import Four from "../../assets/carIcons/four.png";
import Five from "../../assets/carIcons/five.png";
import Six from "../../assets/carIcons/six.png";
const CardSection = () => {
  return (
    <div className="card-section">
      <h1>Why SAGE EDUCATION for SAT Training</h1>
      <div className="card-section-main">
      <Card
          icon={One}
          heading={"Teach the fundamentals"}
          // text={"For High scholers looking to study in lvy league universities"}
        />    <Card
          icon={Two}
          heading={"Diagnostic test and study plan"}
          // text={"For High scholers looking to study in lvy league universities"}
        />

        <Card
          icon={Three}
          heading={"Practice with the real test papers"}
          // text={"For High scholers looking to study in lvy league universities"}
        />
        <Card
          icon={Four}
          heading={"Time Managment strategies"}
          // text={"For High scholers looking to study in lvy league universities"}
        />
        <Card
          icon={Five}
          heading={"Customized course material and practice papers"}
          // text={"For High scholers looking to study in lvy league universities"}
        />
        <Card
          icon={Six}
          heading={"Individualized score goals"}
          // text={"For High scholers looking to study in lvy league universities"}
        />
      </div>
    </div>
  );
};

export default CardSection;
