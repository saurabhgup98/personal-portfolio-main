import PrimaryBtn from '../components/buttons/PrimaryBtn';
import { contactSectionDetails as details, mailtoLink } from '../constants/Constants';
import './css/Contact.css';

const Contact:React.FC = () => {
    const handleClick = () => {
    navigator.clipboard.writeText(details.contactNumber)
      .then(() => {
        alert(`${details.contactNumber} copied to clipboard`);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className='contact-main-container'>
        <div className="contact-section-heading">0{details.sectionNumber}. {details.sectionHeading}</div>
        <div className="contact-section-motive">{details.sectionMotive}</div>
        <div className="contact-text">{details.text}</div>
        <div className="btn-container">
            <div className="btn-one">
                <PrimaryBtn name={details.buttonTxt} action={() => window.location.href = mailtoLink} tooltipText='Click to Mail' />
            </div>
            <div className="btn-two">
                <PrimaryBtn name={details.contactNumber} action={handleClick}  tooltipText='Copy Mobile'/>
            </div>
            
        </div>
    </div>
  )
}

export default Contact