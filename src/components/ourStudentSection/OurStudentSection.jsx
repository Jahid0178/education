import React from "react";
import "./OurStudentSection.css";
import VideoOne from "../../assets/video/videoOne.mp4";
import VideoTwo from "../../assets/video/videoTwo.mp4";
import VideoThree from "../../assets/video/videoThree.mp4";

const OurStudentSection = () => {
  return (
    <div>
      <h1 className="our-student-heading">Hear From Our Students</h1>
      <div className="video-section">
        <video className="video" src={VideoOne} controls />
        <video className="video" src={VideoTwo} controls />
        <video className="video" src={VideoThree} controls />
      </div>
    </div>
  );
};

export default OurStudentSection;
