import styles from "../styles/experienceStyles.module.css";
import { useState } from "react";

function ExperienceSubmitTemplate({ formData, handleSubmit }) {
  return (
    <div className={styles.experienceSubmitCard}>
      <div className={styles.experienceSubmitInfo}>
        <div className={styles.jobTitle}>
          <p>JobTitle</p>
          <span>{formData.Role}</span>
        </div>
        <div className={styles.Employer}>
          <p>Employer</p>
          <span>{formData.Employer}</span>
        </div>
        <div className={styles.startDate}>
          <p>StartDate</p>
          <span>{formData.startDate}</span>
        </div>
        <div className={styles.endDate}>
          <p>EndDate</p>
          <span>{formData.endDate}</span>
        </div>
        <div className={styles.Achievements}>
          <p>Achievements</p>
          <span>
            <div className={styles.AchievementsInfo}>
              <pre>{formData.Achievements}</pre>
            </div>
          </span>
        </div>
      </div>
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}

export default function Experience({ formData, onchange }) {
  const [submit, setSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    return setSubmit(!submit);
  }
  return submit ? (
    <ExperienceSubmitTemplate formData={formData} handleSubmit={handleSubmit} />
  ) : (
    <div className={styles.Experience}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <label htmlFor="Title">JobTitle:</label>
          <input
            type="text"
            name="Role"
            id="Title"
            value={formData.Role}
            onChange={onchange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="Employer">Employer:</label>
          <input
            type="text"
            name="Employer"
            id="Employer"
            value={formData.Employer}
            onChange={onchange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="startDate">startDate:</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={onchange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="endDate">endDate:</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={onchange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="Achievements">Achievements:</label>
          <textarea
            name="Achievements"
            id="Achievements"
            value={formData.Achievements}
            onChange={onchange}
            rows={5}
          ></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
