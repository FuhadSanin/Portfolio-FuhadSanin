import {
  iedc,
  cec,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  quikart,
  jobify,
  movie,
  iedcpost,
  venuenow,
  ataraxia,
} from "../image"

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Freelancer",
    company_name: "Web Developer",
    icon: cec,
    iconBg: "#ffffff",
    date: "December 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "IEDC Bootcamp CEC",
    iconBg: "#ffffff",
    icon: iedc,
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]
const socialmedia = [
  {
    github: "https://github.com/FuhadSanin/",
    linkedin: "https://www.linkedin.com/in/fuhad-sanin-b469a3217/",
    twitter: "https://x.com/s_an_in?s=21&t=jY9EqensyLU26TAYgxMFPg",
    instagram: "https://instagram.com/s.an.in?igshid=YTQwZjQ0NmI0OA==",
    gmail: "mailto:fuhadsanin500@gmail.com",
    phone: "tel:+917012190904",
    leetcode: "https://leetcode.com/fuhadsanin500/",
  },
]

const projects = [
  {
    name: "Ataraxia",
    description:
      "Ataraxia is a full stack social media website built with MERN stack. It has features like authentication, post sharing, like, comment, etc.",
    image: ataraxia,
    link: "https://ataraxia.vercel.app",
    github: "",
    stacks: ["React JS", "Django", "Postgress SQL"],
  },
  {
    name: "VenueNow",
    description:
      "The College Event Hall Booking System is an online platform that simplifies the process of booking event halls on college campuses. ",
    image: venuenow,
    link: "https://venuenow.vercel.app",
    github: "https://github.com/FuhadSanin/VenueNow-MiniProject.git",
    stacks: ["React JS", "Node JS", "MongoDB", "Express JS"],
  },
  {
    name: "Quikart",
    description:
      "Quikart is a full stack e-commerce website built with MERN stack. It has features like authentication, cart, wishlist, checkout, payment, etc.",
    image: quikart,
    link: "https://ecommerce-sanity-fuhadsanin.vercel.app",
    github: "https://github.com/FuhadSanin/QuicKart-Sanity.git",
    stacks: ["Next JS", "Sanity"],
  },
  {
    name: "Jobify",
    description:
      "Jobify is a full stack job board website built with MERN stack. It has features like authentication, job posting, job searching, etc.",
    image: jobify,
    github: "https://github.com/FuhadSanin/Jobify-React-Native.git",
    stacks: ["React-Native", "JSearch API"],
  },
  {
    name: "IEDC CEC Official Website",
    description:
      "Official website of IEDC CEC. It is a static website built with React and Tailwind CSS.",
    image: iedcpost,
    link: "https://github.com/FuhadSanin/iedccecBackend",
    github: "https://github.com/FuhadSanin/iedccecBackend",
    stacks: ["Next JS", "Tailwind CSS", "FireBase"],
  },
  {
    name: "Movie App",
    description:
      "Movie App is a web application built with React. It uses the MovieDB API to fetch movie details.",
    image: movie,
    github: "https://github.com/FuhadSanin/netflix.git",
    stacks: ["React JS", "MovieDB API"],
  },
]

const reviews = [
  {
    img: "https://media.licdn.com/dms/image/D5603AQE19nqOhQ06bQ/profile-displayphoto-shrink_800_800/0/1691842195303?e=1709769600&v=beta&t=sz-xjjwi_e9oZdvJ2LV2yJWl771pFgVdV6z8NgK8hpU",
    linkedin: "https://www.linkedin.com/in/yasirhussainm/",
    name: "Yasir Hussain M",
    position: "Full stack developer at Whiterabbit",
    text: "Sanin's enthusiasm and curiosity keeps the energy fresh in the team till the project get released. I am sure any team would appreciate his drive for web technologies.",
  },
  {
    img: "https://avatars.githubusercontent.com/u/115739037?v=4",
    linkedin: "https://www.linkedin.com/in/nikhila-c-408784254/",
    name: "Nikhila C",
    position: "Tech Incharge at PRODDEC",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, voluptatum! Lorem ipsum dolor sit amet consecteturadipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sitamet consectetur adipisicing elit. Quisquam, voluptatum!",
  },
  {
    img: "https://avatars.githubusercontent.com/u/121556665?v=4",
    linkedin: "https://www.linkedin.com/in/amith-sunil-a59167229/",
    name: "Amith Sunil",
    position: "Web Developer at AvisCruise",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, voluptatum! Lorem ipsum dolor sit amet consecteturadipisicing elit. Quisquam, voluptatum! Lorem ipsum dolor sitamet consectetur adipisicing elit. Quisquam, voluptatum!",
  },
]
export { experiences, technologies, socialmedia, projects, reviews }
