import IconGitHub from "./GitHub";
import IconInstagram from "./Instagram";
import IconLinkedin from "./LinkedIn";
import IconTwitter from "./Twitter";

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Twitter':
        return <IconTwitter />
    case 'Instagram':
        return <IconInstagram />
    case 'Linkedin':
        return <IconLinkedin />
    default:
      return null;
  }
};

export default Icon;
