import type { SocialMediaItem } from "../interfaces/SocialInterface";
import PortfolioImg from '../assets/Portfolio-image.png'

const emailBody = `Hi Team,

I would like to request support for the following issue:

- Issue: Something isn't working
- Details: Please help ASAP

Thanks,
User`;

export const mailtoLink = `mailto:support@example.com?subject=${encodeURIComponent(
  "Support Request"
)}&body=${encodeURIComponent(emailBody)}`;

export const socialMedia: SocialMediaItem[] = [
  { name: "GitHub", url: "https://github.com/saurabhgup98" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/saurabh-sushil-gupta/" },
  { name: "Twitter", url: "https://x.com/saurabhgup98" },
  { name: "Instagram", url: "https://www.instagram.com/saurabhgup98/" },
];

export const email = "saurabhgup98@gmail.com";

export const aboutparagraphData = [
  {
    paragraph:
      "Hello! My name is Saurabh, and I enjoy bringing ideas to life on the web. What started as a curiosity for how things work behind the scenes grew into a passion for building full-stack applications that solve real-world problems.",
  },
  {
    paragraph:
      "Currently, I work as an SDE-1 at a fast-paced startup, building SaaS products across domains like healthcare and e-commerce. I enjoy working across the stack — from frontend development and backend services to databases and cloud deployment.",
  },
  {
    paragraph:
      "I focus on writing clean, scalable code and delivering user-centric products that are both functional and reliable",
  },
];

export const listOfTechnologies = [
  { technology: "Java 24" },
  { technology: "Spring Boot" },
  { technology: "JavaScript (ES6+)" },
  { technology: "TypeScript" },
  { technology: "React" },
  { technology: "Mysql and MongoDB" },
];

export const experience = [
  {
    company:"Nessa Software Labs", 
    profile: "SDE-1 Full stack", 
    startDate: "Jan 2022", 
    endDate:"March 2025",
    details: [
      "Built a multi-tenant SaaS platform for medical billing using Java, Spring Boot, React, and AWS, improving efficiency by 30% and cutting costs by 20%. Developed secure REST APIs with Spring Security and optimized MySQL schemas for fast data access.",
      "Implemented responsive React + TypeScript interfaces based on Figma designs with seamless API integration and full testing. Deployed services to AWS Elastic Beanstalk for scalability and availability while aligning closely with product goals.",
      "Delivered a SaaS platform for pharmacy onboarding and operations. Created React frontends with complete API coverage and Java-based backends, deployed on AWS EC2 with a reliable database setup.",
      "Additional work includes an inventory system and productivity tool using PHP, MySQL, and Spring Boot. Also built a React.js product website for a U.S. client, enhancing their digital presence. Focus remains on clean, scalable, user-focused software."
    ]
  },    
  {
    company:"Nessa Software Labs", 
    profile: "SDE-1 Intern", 
    startDate: "Aug 2021", 
    endDate:"Jan 2022",
    details: [
      "E-commerce Platform Collaborated on building a robust e-commerce site with Node.js (backend) and React.js (frontend), delivering seamless functionality and a user-friendly experience.",
      "ln-House SaaS for Digital Pharmacy Contribute to the design and product roadmap for a scalable SaaS solution, introducing innovative features to streamline pharmacy operations and boost user satisfaction.",
    ]
  },
  {
    company:"BYjus", 
    profile: "BDE Technical and Sales", 
    startDate: "March 2021", 
    endDate:"August 2021",
    details: [
      "Worked as a Business Development Executive in the education sector, focusing on lead conversion and consultative sales. Engaged with prospective students to understand their academic goals, career aspirations, and learning preferences. Conducted detailed needs assessments to recommend suitable programs, ensuring alignment with their objectives and long-term growth.",
      "Effectively communicated the value and structure of educational offerings, addressing questions around curriculum, career outcomes, and institutional support. Built strong rapport and trust to guide students through the enrollment process, resulting in increased conversion rates and high satisfaction. Maintained accurate records in CRM tools and collaborated with marketing and academic teams to optimize the student onboarding journey."
    ]
  },
]

export const contactSectionDetails = {
  sectionNumber: 4,
  sectionHeading: "What’s Next?",
  sectionMotive: "Get in Touch",
  text: "I’m currently seeking exciting new job opportunities. If you have a role that aligns with my skills and experience, feel free to reach out. I’m always open to connecting — whether it’s for a potential collaboration, a job opportunity, or simply a conversation",
  buttonTxt: "Email Me",
  contactNumber: "+91-8454900296",
};

export const projects = [
  {
    title: "Portfolio website",
    description: "Portfolio website created in React with modern responsiveness using CSS3 and Maintaining web responsiveness",
    technologies: ["React", "Typescript", "React Router"],
    imageUrl: PortfolioImg,
  },
  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio to showcase skills and projects.",
  //   technologies: ["React", "Tailwind", "Vercel"],
  //   imageUrl: "https://via.placeholder.com/500x300?text=Portfolio",
  // },
];


