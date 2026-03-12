import "../styles/educationStyles.css";
import { Link } from "react-router-dom";
import Experience from "./experience";
export default function Education({ formData, onchange }) {
  return (
    <div className="Education">
      <form>
        <div className="inputContainer">
          <label htmlFor="University">University:</label>
          <input
            type="text"
            id="University"
            name="University"
            value={formData.University}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="Degree">Degree:</label>
          <input
            type="text"
            name="Degree"
            id="Degree"
            value={formData.Degree}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="CGPA">CGPA:</label>
          <input
            type="number"
            name="CGPA"
            id="CGPA"
            value={formData.CGPA}
            onChange={onchange}
          />
        </div>
      </form>
      <Link to={"/"}>
        <button>prev</button>
      </Link>
      <Link to={"/Experience"}>
        <button>next</button>
      </Link>
    </div>
  );
}
