import { useState } from "react";
import SectionHeading from "../../components/ui/SectionHeading";
import { experience } from "../../constants/data";
import "./Experience.css";

const Experience: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="exp-main-container">
      <div className="header">
        <SectionHeading sectionNumber={2} sectionHeading="Where I've Worked" />
      </div>
      <div className="content">
        <div className="exp-content-navbar">
          {experience.map((item, index) => (
            <div
              className={`exp-comany-name ${
                index === selectedIndex ? "selected" : ""
              }`}
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {item.company}
            </div>
          ))}
        </div>
        <div className="exp-content-main">
          <h3>{experience[selectedIndex].profile} <span> @ {experience[selectedIndex].company}</span></h3>
          <div className="date">
            {experience[selectedIndex].startDate} - {experience[selectedIndex].endDate}
          </div>
          {experience[selectedIndex].details.map((item,index) => (
            <div className="experience-detail" key={index}>
                {item}
            </div>
          )

          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
