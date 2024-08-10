// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/webHotel.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Jeremy Sagala",
  tagline: "I am a frontend developer and UI/UX designer",
  img: profile,
  about: `I am a 7th-semester student at Dian Nusantara University with a GPA of 3.61, skilled in UI/UX design and frontend development. I have experience working with Hotel Pinangsia on creating a company profile and a hotel management system. My expertise lies in interface design and frontend development.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  github: "https://github.com/zensless"
};

// Enter your Work Experience here
export const workDetails = [{
  Position: "Frontend Web Developer",
  Company: `Hotel Pinangsia`,
  Location: "Jakarta",
  Type: "Internship",
  Duration: "March 2024 - Aug 2024",
},
];

// Enter your Education Details here
export const eduDetails = [{
  Position: "Information Technology",
  Company: `Dian Nusantara`,
  Location: "Jakarta",
  Type: "Reguler",
  Duration: "Jan 2021 - Present",
},
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: bootstrap,
  tailwind: tailwind,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [{
  title: "Company profile website",
  image: projectImage1,
  description: `I developed a company profile website for Hotel Pinangsia using WordPress. On this website, I showcased the hotel's profile, including its history, vision and mission, as well as the rooms available at Hotel Pinangsia.`,
  techstack: "Wordpress",
  previewLink: "http://pinangsia.rf.gd"
},
{
  title: "hotel management system",
  image: projectImage2,
  description: `I developed a hotel management website for Hotel Pinangsia using pure PHP. This website includes several features, such as reservation management and reporting, which can be printed.`,
  techstack: "PHP/Tailwind, JavaScript",
  previewLink: "https://github.com/zensless/manajemen-hotel.git"
},
{
  title: "Calculator",
  image: projectImage3,
  description: `This is my first project. I developed a calculator using HTML, CSS, and JavaScript. The calculator functions provides basic arithmetic operations. It was a great opportunity to practice and apply my coding skills.`,
  techstack: "HTML/CSS, JavaScript",
  previewLink: "https://github.com/zensless/kalkulator.git"
},
];

// Enter your Contact Details here
export const contactDetails = {
  email: "jeremy.sgl99@gmail.com",
  phone: "https://wa.me/6285893489996",
};
