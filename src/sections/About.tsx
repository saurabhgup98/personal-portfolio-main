import "./css/About.css";

import { aboutparagraphData, listOfTechnologies } from "../constants/Constants";
import SectionHeading from "../components/ui/SectionHeading";

import MyImage from '../assets/saurabh_pic_web.jpeg';

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
            <img src={MyImage} alt="" />
            <div className="blur"></div>
          </div>
        <div className="inner-cont"></div>
        </div>
        
      </div>
    </div>
  );
};

export default About;


