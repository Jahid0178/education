import { Container, Grid } from "@mui/material";
import React from "react";
import ProudMomentVideo from "../../assets/video/proud-moment.mp4";
import "./ProudMoment.css";
const ProudMoment = () => {
  return (
    <div className="proud-moment">
      <Container>
        <Grid className="proud" container spacing={0}>
          <Grid xs={12} sm={6} md={6} lg={6}>
            <div className="proud-moment-section">
              <h1 className="proud-moment-heading">Proud Moments</h1>
              <p>
                Over the years Sage has given tremendous results in the SAT
                tests.
                <br /> More than what we say!
                <br />
                <br /> Achieve the best with Sage!
                <br /> Join Sage!
              </p>
              <button className="proud-moment-btn">
                <a className="a-link-btn" href="#form">
                  Get a Callback from an Expert
                </a>
              </button>
            </div>{" "}
          </Grid>{" "}
          <Grid xs={12} sm={6} md={6} lg={6}>
            <video
              className="proud-moment-video"
              src={ProudMomentVideo}
              controls
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProudMoment;
