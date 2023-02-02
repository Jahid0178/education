import React from "react";
import StudentCard from "../../constants/studentCard/StudentCard";
import "./StudentSection.css";
import ProfileOne from "../../assets/profile/profile-one.jpeg";
import ProfileTwo from "../../assets/profile/profile-two.jpeg";
import ProfileThree from "../../assets/profile/profile-three.jpeg";

const StudentSection = () => {
  return (
    <div className="student-section">
      <h1>OUR RECENT SAT TEST SCORE</h1>
      <div className="student-card-main">
        <StudentCard
          profile={ProfileOne}
          heading={"Sreekar"}
          marks={"SAT Score: 1570"}
          text={
            "I first approached Sage education because I needed some extra support and guidance to get competitive SAT score. During my time with Sage I worked with many different tutors and found course material very engaging and very effective. The technique I learned at Sage helped me to develop my Strategy and Tactics to get the strong grades. I highly recommend Sage Education to anyone who’s looking to get into the dream university."
          }
        />
        <StudentCard
          profile={ProfileTwo}
          heading={"Abeer"}
          marks={"SAT Score: 1525"}
          text={
"I receive Sage’s support in SAT and college admisison process. With Sage’s support I’ve received the offers from top universities such as NYU, UCLA, McGill, university of Boston,Northwestern and many more. The support I received from the Sage  was exactly what I needed to make the SAT and application process less daunting. Without Sage’s Support I definitely wouldn’t have had the success I’ve seen so far and I’m highly satisfied with their services."          }
        />
        <StudentCard
          profile={ProfileThree}
          heading={"Nida"}
          marks={"SAT Score: 1510"}
          text={
"Sage offers the best SAT classes in dubai. The trainers are more of education counselors than the common lectures. They help students to identify their weak spots and overcome them in such a mannner that they don’t effect the results. The preparation technique at Sage is a results of consistent efforts of the faculty. I enjoyed prepping with Sage Education."          }
        />
      </div>
    </div>
  );
};

export default StudentSection;
