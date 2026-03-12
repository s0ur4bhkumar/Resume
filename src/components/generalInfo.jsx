import { Link } from "react-router-dom";
import "../styles/generalStyles.css";

export default function General({ formData, onchange }) {
  return (
    <div className="General">
      <form>
        <div className="inputContainer">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="phoneNumber">Number:</label>
          <input
            type="tel"
            name="Contact"
            id="phoneNumber"
            value={formData.Contact}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="linkedIn">LinkedIn:</label>
          <input
            type="url"
            name="linkedIn"
            id="linkedIn"
            value={formData.linkedIn}
            onChange={onchange}
          />
        </div>
      </form>
      <Link to={"/Education"}>
        <button>next</button>
      </Link>
    </div>
  );
}
