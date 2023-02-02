import { Grid, Container } from "@mui/material";
import React from "react";
import Degree from "../../assets/degree.jpg";
import Academy from "../../assets/academy.jpg";
import "./DetialSection.css";
const DetialSection = () => {
  return (
    <div>
      <div className="detial-section">
        <Container>
          <Grid container spacing={0}>
            <Grid xs={12} sm={4} md={4} lg={4}>
              <img alt="degree" src={Degree} className="degree" />
            </Grid>
            <Grid xs={12} sm={8} md={8} lg={8}>
              <h1 className="detial-section-heading">
                Talk to our SAT experts today and get a custom study plan to
                crack the digital SATs in 2023
              </h1>
              <p className="detial-section-text">
                Sage Education offers the best and most efficient university
                admission consultants in Dubai. The admission consultancy process is
                based on the career interests, profile, major, and universities
                of interest
              </p>
              <button className="book-btn">
                <a className="a-link-btn" href="#form">
                  Book a Session with Experts{" "}
                </a>
              </button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="detial-section">
        <Container>
          <Grid container spacing={0}>
            <Grid xs={12} sm={8} md={8} lg={8}>
              <h1 className="detial-section-one-heading">
                University Admission Consulting
              </h1>
              <p className="detial-section-text-one">
                Sage Education offers the best and most efficient university
                admission consultants in Dubai. The admission consultancy is
                based on the career interests, profile, major, and universities
                of interest. The students are matched with a consultant that has
                more than 10 years of experience in the domain and has shown
                100% success results. The team at Sage offers International
                education consultants in Dubai for Bachelor, Masters and
                Doctoral Programs.
              </p>
              <button className="book-btn-one">
                <a className="a-link-btn" href="#form">
                  Learn More{" "}
                </a>
              </button>
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4}>
              <img alt="academy" src={Academy} className="degree-one" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default DetialSection;
