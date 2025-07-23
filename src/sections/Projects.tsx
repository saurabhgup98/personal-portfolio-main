import SectionHeading from '../components/headers/SectionHeading';
import './css/Projects.css';

const Projects: React.FC = () => {
  return (
    <div className='projects-main-container'>
        <div className="header-section">
            <SectionHeading sectionNumber={3} sectionHeading='Some Things I’ve Built' />
        </div>
        <div className="main-section">

        </div>
        <div className="others-section">
            <div className="projects-other-section-heading">
                Other Noteworthy Projects
            </div>
            <div className="view-archive-link"><a href="">view the archive</a></div>
            <div className="list-other-projects-section">
                <div className="list-container">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects