import styles from "../styles/finalResume.module.css";
export default function FinalResume({ formData }) {
  return (
    <>
      <div className={styles.finalResume}>
        <div className={styles.header}>
          <div className={styles.Name}>
            <h2>{formData.firstName}</h2>
            <h2>{formData.lastName}</h2>
          </div>
          <div className={styles.contactInfo}>
            <div>{formData.Contact}</div>
            <div>{formData.email}</div>
            <div>{formData.address}</div>
            <div>
              <a href={formData.linkedIn}>
                {formData.linkedIn ? "linkedIn" : <></>}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.education}>
          {formData.University ? (
            <>
              <h3>EDUCATION</h3>
              <div className={styles.University}>
                <h3>University</h3> <span>{formData.University}</span>
              </div>
            </>
          ) : (
            <></>
          )}
          {formData.Degree ? (
            <div className={styles.Degree}>
              <h3>Degree </h3>
              <span>{formData.Degree}</span>
            </div>
          ) : (
            <></>
          )}
          {formData.CGPA ? (
            <div className={styles.CGPA}>
              <h3>CGPA</h3>
              <span>{formData.CGPA}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.experience}>
          {formData.Role ? (
            <>
              <h3>EXPERIENCE</h3>
              <div className={styles.Role}>
                <p>Role</p>
                <span>{formData.Role}</span>
              </div>
            </>
          ) : (
            <></>
          )}
          {formData.Employer ? (
            <>
              <div className={styles.Employer}>
                <p>Employer</p>
                <span>{formData.Employer}</span>
              </div>
            </>
          ) : (
            <></>
          )}
          {formData.startDate && formData.endDate ? (
            <div className={styles.Duration}>
              <p>Duration</p>
              <span>
                 [ {formData.startDate} ] -- [ {formData.endDate} ]
              </span>
            </div>
          ) : (
            <></>
          )}
          {formData.Achievements ? (
            <div className={styles.Achievements}>
              <h3>Achievements</h3>
              <div className={styles.achievementContent}>
                <pre>{formData.Achievements}</pre>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
