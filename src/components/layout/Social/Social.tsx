import Icon from "../../icons/Icon";
import type { SocialMediaIconsProp } from "../../../types/social";
import "./Social.css";

const Social: React.FC<SocialMediaIconsProp> = ({ socialMedia }) => {
  return (
    <div className="social-icons-container">
      <div className="social-icons">
        {socialMedia.map((item) => (
          <div className="social-icon">
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="social-link"
            >
              <Icon name={item.name} />
            </a>
          </div>
        ))}
      </div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default Social;
