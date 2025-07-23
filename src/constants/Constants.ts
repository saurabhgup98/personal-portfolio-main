import type { SocialMediaItem } from "../interfaces/SocialInterface";

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
  { name: "GitHub", url: "https://github.com/bchiang7" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/bchiang7" },
  { name: "Twitter", url: "https://twitter.com/bchiang7" },
  { name: "Instagram", url: "https://www.instagram.com/bchiang7" },
];

export const email = "saurabhgup98@gmail.com";

export const aboutparagraphData = [
  {
    paragraph:
      "Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS",
  },
  {
    paragraph:
      "Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.",
  },
  {
    paragraph:
      "I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.",
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

export const contactSectionDetails = {
  sectionNumber: 4,
  sectionHeading: "What’s Next?",
  sectionMotive: "Get in Touch",
  text: "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll do my best to get back to you!",
  buttonTxt: "Email Me",
  contactNumber: "+91-8454900296",
};

