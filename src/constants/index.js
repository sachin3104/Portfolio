import TapBlog from "../assets/projects/TapBlog.png";
import ChicagoEnergy from "../assets/projects/ChicagoEnergy.png";
import ToDo from "../assets/projects/ToDo.png";
import SocialLens from "../assets/projects/SocialLens.png";
import DrugBase from "../assets/projects/DrugBase.png";
import EShop from "../assets/projects/EShop.png";

export const HERO_CONTENT = `I am a passionate software developer with a keen interest in web development, eager to learn quickly and adapt to new technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 – Oct 2024",
    role: "Software Developer Intern",
    company: "6th-Sense",
    description: `Integrated AI into the frontend for body measurement analysis and developed a video upload feature for exercise analysis with automated email results. Utilized React.js for the frontend, Django REST Framework for backend API development, and Firebase for real-time data management.`,
    technologies: ["React.js", "DRF", "Django", "Firebase", "Botpress"],
  },
];

export const PROJECTS = [
  {
    title: "DrugBase",
    image: DrugBase,
    description:
      "DrugBase is a drug discovery tool built with the latest in machine learning and natural language processing (NLP) technology. Powered by NVIDIA NIM and protein structure prediction models.",
    technologies: [
      "Next.js",
      "React.js",
      "Typescript",
      "Tailwind",
      "NIVIDIA API",
    ],
    link: "https://github.com/sachin3104/DrugBase-NEXT",
  },
  {
    title: "TapBlog",
    image: TapBlog,
    description:
      "This is a blogging platform built using Next.js, React, and JavaScript. Users can create an account, log in using JWT authentication, and add or read blogs. The website is styled using Tailwind CSS, ensuring a modern and responsive design.",
    technologies: ["Next.js", "React.js", "Javascript", "Tailwind"],
    link: "https://github.com/sachin3104/TapBlog-NEXT",
  },
  {
    title: "SocialLens",
    image: SocialLens,
    description:
      "This is a profile photo changer application built using Next.js and styled with DaisyUI. Users can log in through various social media platforms and change their profile photos according to their platform of choice, such as Instagram, Twitter, and more.",
    technologies: ["Next.js", "React.js", "Typescript", "DaisyUI", "Clerk"],
    link: "https://github.com/sachin3104/SocialLens-NEXT",
    live: "https://sociallens.vercel.app/?vercelToolbarCode=2I2MWqoPKatOSd1",
  },
  // {
  //   title: "Chicago Building Energy Usage",
  //   image: ChicagoEnergy,
  //   description:
  //     "This project is a web application that provides a searchable and interactive dashboard for visualizing the 2010 energy usage data of Chicago buildings. Users can search, filter, and view details about buildings, including energy usage over time.",
  //   technologies: ["Next.js", "React.js", "Javascript", "Tailwind", "Chart.js"],
  //   github: "https://github.com/sachin3104/Chicago-Building-Energy-Usage",
  //   live: "https://chicago-building-energy-usage.vercel.app/?vercelToolbarCode=bs9Easb4zS1Ny4t",
  // },
  {
    title: "ShopSphere",
    image: EShop,
    description:
      "This is a shopping website built using Next.js, React, and JavaScript. Users can browse products, add them to the cart, and manage their cart seamlessly.",
    technologies: ["Next.js", "React.js", "Javascript", "Tailwind"],
    link: "https://github.com/sachin3104/ShopSphere-NEXT",
  },
  {
    title: "ToDoMore",
    image: ToDo,
    description:
      "This is a Todo application built using Next.js and React. Users can add, edit, and delete tasks, making it easy to manage their daily activities. The application features a clean and responsive design for a seamless experience across different devices.",
    technologies: ["Next.js", "React.js", "Javascript", "Tailwind"],
    link: "https://github.com/sachin3104/ToDoMore-NEXT",
  },
];

export const CONTACT = {
  address: "Vellore, Tamil Nadu, India ",
  email: "sachin.jakhar2011@gmail.com",
};
