import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { GrFormClose } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import styles from "./style.module.css";

const PopUpForm = ({ heading, title, setIsOpenPopUp }) => {
  const { register, handleSubmit } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_0teko3q", // service id
        "template_bbfwopz", // template id
        form.current,
        "fBgZ6RWbXWobGWEHz" // public key
      )
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            setIsOpenPopUp(false);
            window.location.replace(
              "https://www.sageeducation.ae/campaigns/sat-coaching-dubai/thanks.php"
            );
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formHeading}>
          <span>
            <h2>{heading}</h2>
          </span>
          <span>
            <button
              className={styles.btnClose}
              onClick={() => setIsOpenPopUp(false)}
            >
              <GrFormClose size={30} />
            </button>
          </span>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <h4 style={{ marginBottom: "1rem", marginTop: 0 }}>{title}</h4>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name=""
              id="name"
              {...register("fullName", { required: true, maxLength: 20 })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name=""
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Mobile Number</label>
            <br />
            <input
              type="number"
              name=""
              id="phone"
              {...register("phone", { required: true })}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <input type="submit" value="Submit" className={styles.submitBtn} />
        </form>
      </div>
    </>
  );
};

export default PopUpForm;
