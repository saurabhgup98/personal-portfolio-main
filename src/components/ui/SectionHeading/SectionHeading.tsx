import './SectionHeading.css';
import type { SectionHeadingI } from '../../../types/common';

const SectionHeading: React.FC<SectionHeadingI> = ({sectionNumber, sectionHeading}) => {
  return (
    <div className="section-heading-main-container">
        <div className="content">
            <span> 0{sectionNumber}. </span>
            <div className="text"> {sectionHeading} </div>
        </div>      
      <div className="dash"></div>
    </div>
  );
};

export default SectionHeading;
