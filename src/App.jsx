import "./App.css";
import Result from "./components/result.jsx";
import General from "./components/generalInfo.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
function App() {
  return (
    <>
      <div className="forms">
        <General></General>
        <Education></Education>
        <Experience></Experience>
      </div>
      <div className="result">
        <Result></Result>
      </div>
    </>
  );
}

export default App;
