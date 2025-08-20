import "./Button.css";
import type { primaryButtonPropsI } from "../../../types/common";

const Button: React.FC<primaryButtonPropsI> = ({name, action, tooltipText}) => {
  return (
    <div className="primary-btn-container" onClick={action}>
      {name}
      {tooltipText && <span className="tooltiptext">{tooltipText}</span>}
    </div>
  );
};

export default Button;
