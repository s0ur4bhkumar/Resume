import { Link } from "react-router-dom";
import styles from "../styles/generalStyles.module.css";
import { useState } from "react";

function GeneralSubmitTempplate({ formData, handleSubmit }) {
  return (
    <div className={styles.generalSubmitInfo}>
      <div className={styles.generalSubmitInfoContent}>
        <div className={styles.firstName}>
          <p>First Name</p>
          <span>{formData.firstName}</span>
        </div>
        <div className={styles.lastName}>
          <p>Last Name</p>
          <span>{formData.lastName}</span>
        </div>
        <div className={styles.contact}>
          <p>Contact</p>
          <span>{formData.Contact}</span>
        </div>
        <div className={styles.email}>
          <p>E-mail</p>
          <span>{formData.email}</span>
        </div>
        <div className={styles.address}>
          <p>Address</p>
          <span>{formData.address}</span>
        </div>
        <div className={styles.linkedIn}>
          <p>LinkedIn</p>
          <span>{formData.linkedIn}</span>
        </div>
      </div>
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}

export default function General({ formData, onchange }) {
  const [submit, setSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    return setSubmit(!submit);
  }
  return (
    <>
      {submit ? (
        <GeneralSubmitTempplate
          formData={formData}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className={styles.General}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={onchange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={onchange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="phoneNumber">Number:</label>
              <input
                type="tel"
                name="Contact"
                id="phoneNumber"
                value={formData.Contact}
                onChange={onchange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={onchange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={onchange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="linkedIn">LinkedIn:</label>
              <input
                type="url"
                name="linkedIn"
                id="linkedIn"
                value={formData.linkedIn}
                onChange={onchange}
              />
            </div>
            <button className={styles.submitBtn} type="submit">
              submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
