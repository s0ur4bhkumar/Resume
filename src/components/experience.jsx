import "../styles/experienceStyles.css";

export default function Experience({ formData, onchange }) {
  return (
    <div className="Experience">
      <form>
        <div className="inputContainer">
          <label htmlFor="Title">JobTitle:</label>
          <input
            type="text"
            name="Role"
            id="Title"
            value={formData.Role}
            onChange={onchange}
          />
        </div>
        <div className="inputContainer"></div>
        <div className="inputContainer duration">
          <div className="startDate">
            <label htmlFor="startDate">startDate:</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formData.startDate}
              onChange={onchange}
            />
          </div>
          <div className="endDate">
            <label htmlFor="endDate">endDate:</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={onchange}
            />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="Achievements">Achievements:</label>
          <textarea
            name="Achievements"
            id="Achievements"
            value={formData.Achievements}
            onChange={onchange}
            rows={5}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
