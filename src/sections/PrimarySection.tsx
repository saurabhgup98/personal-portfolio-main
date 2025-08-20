import PrimaryBtn from "../components/ui/Button";
import "./css/PrimarySection.css";

const PrimarySection = () => {
  return (
    <div className="Primary-content-container">
      <div className="intro">Hi, my name is</div>
      <div className="heading">Saurabh Gupta.</div>
      <div className="sub-heading">I build things for the web.</div>
      <div className="explaner">
        I'm a software engineer who specializes in web development,
        transforming thoughtful designs into clean, scalable, and accessible web
        applications. I focus on writing maintainable code and building
        human-centered digital products that deliver real value.
      </div>
      <div className="primary-section-btn">

        <PrimaryBtn name="Contact Me" action={() => {}} tooltipText="" />
      </div>
    </div>
  );
};

export default PrimarySection;
