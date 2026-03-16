import styles from "../styles/educationStyles.module.css";
import { useState } from "react";
function EducationSubmitTemplate({ formData, handleSubmit }) {
  return (
    <div className={styles.educationSubmitCard}>
      <div className={styles.educationSubmitInfo}>
        <div className={styles.University}>
          <p>University</p>
          <span>{formData.University}</span>
        </div>
        <div className={styles.Degree}>
          <p>Degree</p>
          <span>{formData.Degree}</span>
        </div>
        <div className={styles.CGPA}>
          <p>CGPA</p>
          <span>{formData.CGPA}</span>
        </div>
      </div>
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}

export default function Education({ formData, onchange }) {
  const [submit, setSubmit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    return setSubmit(!submit);
  }
  return submit ? (
    <EducationSubmitTemplate formData={formData} handleSubmit={handleSubmit} />
  ) : (
    <div className={styles.Education}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <label htmlFor="University">University:</label>
          <input
            type="text"
            id="University"
            name="University"
            value={formData.University}
            onChange={onchange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="Degree">Degree:</label>
          <input
            type="text"
            name="Degree"
            id="Degree"
            value={formData.Degree}
            onChange={onchange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="CGPA">CGPA:</label>
          <input
            type="number"
            name="CGPA"
            id="CGPA"
            value={formData.CGPA}
            onChange={onchange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
