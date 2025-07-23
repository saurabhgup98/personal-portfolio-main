import IconGitHub from "./github";
import IconInstagram from "./instagram";
import IconLinkedin from "./linkedin";
import IconTwitter from "./twitter";

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
