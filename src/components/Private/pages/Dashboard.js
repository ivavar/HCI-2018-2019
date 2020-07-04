import React from "react";
import SEO from "components/SEO";
import styles from "./styles.module.css";
import Popup from "react-popup";
import Calendar from "rc-calendar";

export default () => (
  <>
    <SEO title="Dashboard" />

    <form className={styles.LoginForm}>
      <h2>Confirm your booking:</h2>
      <h3 className={styles.h3}>Ivy Apartment</h3>
      <div className={styles.borderTop}>
        <label>People:</label>
        <label>4</label>
      </div>
      <div className={styles.div}>
        <label>Check-in:</label>
        <label>DD/MM/YYYY</label>
      </div>
      <div className={styles.div}>
        <label>Check-out:</label>
        <label>DD/MM/YYYY</label>
      </div>
      <div className={styles.borderBottom}>
        <label>Price: </label>
        <label>kn</label>
      </div>

      <input
        type="submit"
        className={styles.LoginForm__button}
        value={"Book"}
        onClick={() => {
          alert(
            "You have successfully booked a place :) Host's information has been sent to Your e-mail address."
          );
        }}
      />
    </form>
  </>
);
