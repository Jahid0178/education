import React from "react";
import { Container, Grid } from "@mui/material";
import Logo from "../../assets/sage-logo.png";
import "./Footer.css";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={0}>
          <Grid xs={12} sm={3} md={3} lg={3}>
            <h1 className="footer-heading">About Us</h1>
            <hr className="hr-line" />
            <img alt="logo" src={Logo} className="footer-logo" />
            <p className="footer-text">
              Quality Exam <br /> Preparation,Personalized University <br />{" "}
              Admissions and Effective Tutoring in Dubai.
            </p>
            <p className="locate-us">Locate Us</p>
          </Grid>
          <Grid xs={12} sm={2} md={2} lg={2}>
            <h1 className="footer-heading">Quick Links</h1>
            <hr className="hr-line" />
            <div>
              <a className="footer-link" href="#form">
                Home
              </a>
              <a className="footer-link" href="#form">
                About Us
              </a>
              <a className="footer-link" href="#">
                Careers
              </a>
              <a className="footer-link" href="#">
                Contact Us
              </a>
            </div>
          </Grid>
          <Grid xs={12} sm={2} md={2} lg={2}>
            <h1 className="footer-heading">Courses</h1>
            <hr className="hr-line" />
            <div>
              <a
                className="footer-link"
                target="_blank"
                href="https://sageeducation.ae/campaigns/ib-tutoring/"
                rel="noreferrer"
              >
                IB Tutoring{" "}
              </a>
              <a
                className="footer-link"
                target="_blank"
                href="https://www.sageeducation.ae/campaigns/ap-tutoring/"
                rel="noreferrer"
              >
                AP Tutoring{" "}
              </a>
              <a
                className="footer-link"
                target="_blank"
                href="https://www.sageeducation.ae/campaigns/a-level-tutoring/"
                rel="noreferrer"
              >
                A Level Tutoring
              </a>
              <a
                className="footer-link"
                target="_blank"
                href="https://www.sageeducation.ae/campaigns/gcse-igcse-tutoring/"
                rel="noreferrer"
              >
                GCSE IGCSE Tutoring{" "}
              </a>
            </div>
          </Grid>
          <Grid xs={12} sm={2} md={2} lg={2}>
            <h1 className="footer-heading">Address</h1>
            <hr className="hr-line" />
            <div>
              <div className="address-section">
                <div>
                  <MdLocationOn
                    color="#a4a4a4"
                    className="address-logo"
                    size={18}
                  />
                </div>{" "}
                <p className="footer-link-address">
                  Tameem House, Barsha Heights, Office 909, Dubai, UAE
                </p>
              </div>
            </div>
            <div>
              <div className="address-section">
                <div>
                  <BsTelephoneFill
                    color="#a4a4a4"
                    className="address-logo"
                    size={14}
                  />
                </div>
                <p className="footer-link-address">+971 56 408 1202 </p>
              </div>
            </div>
            <div>
              <div className="address-section">
                <div>
                  <BsTelephoneFill
                    color="#a4a4a4"
                    className="address-logo"
                    size={14}
                  />
                </div>
                <p className="footer-link-address">(04)5547741</p>
              </div>
            </div>{" "}
            <div>
              <div className="address-section">
                <div>
                  <FaEnvelope
                    color="#a4a4a4"
                    className="address-logo"
                    size={14}
                  />
                </div>
                <p className="footer-link-address">info@sageeducation.ae</p>
              </div>
            </div>
            <div>
              <div className="address-section">
                <div>
                  <MdAccessTimeFilled
                    color="#a4a4a4"
                    className="address-logo"
                    size={14}
                  />
                </div>
                <p className="footer-link-address">
                  Mon-Fri 12 PM to 9 PM Sat-Sun 10 AM to 7 PM
                </p>
              </div>
            </div>{" "}
          </Grid>
          <Grid xs={12} sm={3} md={3} lg={3}>
            <div className="subscribe-section">
              <h1 className="footer-heading">Subscribe</h1>
              <div>
                <hr className="hr-line" />
              </div>
              <input placeholder="Enter Name" className="footer-input" />
              <input placeholder="Enter Email" className="footer-input" />
              <button className="subscribe-btn">Subscribe</button>
              <p className="follow-heading">Follow Us</p>
              <div>
                <div className="footer-icon-section">
                  <div className="footer-icon">
                    <ImFacebook size={12} />
                  </div>
                  <div className="footer-icon">
                    <BsInstagram size={12} />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
