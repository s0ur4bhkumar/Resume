import "../styles/result.css";
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
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<General formData={formData} onchange={onChange} />}
          />
          <Route
            path="/Education"
            element={<Education formData={formData} onchange={onChange} />}
          />
          <Route
            path="/Experience"
            element={<Experience formData={formData} onchange={onChange} />}
          />
        </Routes>
      </BrowserRouter>
      <FinalResume formData={formData} />
    </div>
  );
}
