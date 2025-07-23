import PrimaryBtn from "../components/buttons/PrimaryBtn";
import "./css/PrimarySection.css";

const PrimarySection = () => {
  return (
    <div className="Primary-content-container">
      <div className="intro">Hi, my name is</div>
      <div className="heading">Saurabh Gupta.</div>
      <div className="sub-heading">I build things for the web.</div>
      <div className="explaner">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </div>
      <div className="primary-section-btn">
        {/* <button>Hello</button> */}
        <PrimaryBtn name="Contact Me" action={() => {}} tooltipText="" />
      </div>
    </div>
  );
};

export default PrimarySection;
