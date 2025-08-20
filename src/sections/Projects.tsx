import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../constants/Constants";
import "./css/Projects.css";

const Projects: React.FC = () => {
  return (
    <div className="projects-main-container">
      <div className="header-section">
        <SectionHeading
          sectionNumber={3}
          sectionHeading="Some Things I’ve Built"
        />
      </div>
      <div className="main-section">
        <div className="projects-container">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-card ${index % 2 === 0 ? "normal" : "reverse"}`}
        >
          <div className="project-image-wrapper">
            <div className="project-image-background">
              <img src={project.imageUrl} alt={project.title} />
            </div>
          </div>

          <div className="project-content">
            <p className="project-featured">Featured Project</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">
              {project.technologies.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
      </div>
      {/* <div className="others-section">
            <div className="projects-other-section-heading">
                Other Noteworthy Projects
            </div>
            <div className="view-archive-link"><a href="">view the archive</a></div>
            <div className="list-other-projects-section">
                <div className="list-container">

                </div>
            </div>
        </div> */}
    </div>
  );
};

export default Projects;
