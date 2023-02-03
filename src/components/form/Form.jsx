import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Logo from "../../assets/sage-logo.png";
import "./Form.css";
import { Container } from "@mui/material";
import Call from "../../assets/call.gif";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [formValues, setFormValues] = useState({});
  const form = useRef();

  const notify = () => {
    toast.success("Form Submission Success", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const errorPopUp = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0teko3q", // service id
        "template_bk7t9at", // template id
        form.current,
        "fBgZ6RWbXWobGWEHz" // public key
      )
      .then(
        (result) => {
          if (result.status === 200) {
            notify();
            e.target.reset();
            setFormValues("");
          }
        },
        (error) => {
          errorPopUp(error.text);
        }
      );
  };

  // "fBgZ6RWbXWobGWEHz" public key;
  // "template_bk7t9at",  template id
  // "service_0teko3q",  service id

  return (
    <div id="form" className="form">
      <ToastContainer />;
      <div className="form-section-main">
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={8} lg={8}>
              <a href="#" className="a-link-btn">
                <img alt="logo" src={Logo} className="logo" />
              </a>
              <h1 className="form-heading">Ace the digital SAT with Sage</h1>
              <p className="form-sub-heading">
                Score 1500+ in SAT <br /> Dubai’s No.1 Certified Academy{" "}
              </p>
              <p className="form-text">
                Learn from American and British Expert Trainers
              </p>
              <p className="form-sub-text">
                100% Result Oriented Program | 76 Hours of Coaching | Practice
                With Real Test Questions | Individually Tailored Tutoring | 10
                Practice Test and Review Sessions
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div className="form-section">
                <h1 className="form-section-heading">
                  Avail 10%OFF EarlyBird Discount
                </h1>
                <p className="form-section-text">
                  Dubai's No 1 SAT Coaching Centre
                </p>
                <form onSubmit={handleFormSubmit} ref={form}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-input"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-input input-number"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="form-input"
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                    required
                  />
                  <button className="form-button">
                    Get a call back from an expert
                  </button>
                </form>
                <p className="alert">*Your information is safe with us</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <a target="_blank" href="tel: +971564081202" rel="noreferrer">
        <div className="call-section">
          <img alt="call" src={Call} className="call" />
        </div>
      </a>
    </div>
  );
};

export default Form;
