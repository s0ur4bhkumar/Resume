import styles from "../styles/result.module.css";
import General from "./generalInfo";
import Education from "./education";
import Experience from "./experience";
import { useState } from "react";
import FinalResume from "./finalResume";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function Result() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Contact: "",
    email: "",
    address: "",
    linkedIn: "",
    University: "",
    Degree: "",
    CGPA: "",
    Role: "",
    Employer: "",
    startDate: "",
    endDate: "",
    Achievements: "",
  });
  function onChange(e) {
    const { name, value } = e.target;
    console.log("name:", name);
    console.log("value", value);
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <General formData={formData} onchange={onChange} />
        <Education formData={formData} onchange={onChange} />
        <Experience formData={formData} onchange={onChange} />
      </div>
      <FinalResume formData={formData} />
    </div>
  );
}
