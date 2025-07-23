import "./css/About.css";

import { aboutparagraphData, listOfTechnologies } from "../constants/Constants";
import SectionHeading from "../components/headers/SectionHeading";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="left-section">
        <div className="header">
          <SectionHeading sectionNumber={1} sectionHeading="About Me" />
        </div>
        {aboutparagraphData.map((item, index) => (
          <p key={index} className="paragraph" style={{ marginBottom: "20px" }}>
            {item.paragraph}
          </p>
        ))}
        <div className="list-with-text">
          Here are a few technologies I’ve been working with recently:
          <div className="item-contaiener">
            {Array.from(
              { length: Math.ceil(listOfTechnologies.length / 2) },
              (_, rowIndex) => (
                <div className="tech-row" key={rowIndex}>
                  {listOfTechnologies
                    .slice(rowIndex * 2, rowIndex * 2 + 2)
                    .map((item, index) => (
                      <div className="tech-item" key={index}>
                        {item.technology}
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="right-section-cont">
          <div className="outer-cont">
            <img src="https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=612x612&w=0&k=20&c=JESGRQ2xqRH9ZcJzvZBHZIZKVY8MDejBSOfxeM-i5e4=" alt="" />
            <div className="blur"></div>
          </div>
        <div className="inner-cont"></div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
