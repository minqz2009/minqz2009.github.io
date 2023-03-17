import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  cpp,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  eclipse,
  freelancer,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  security,
  pytorch,
  python,
  kernal,
  kafka
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Low Latency C++ Programing",
    icon: web,
  },
  {
    title: "Python Scripting",
    icon: mobile,
  },
  {
    title: "React Web Development",
    icon: backend,
  },
  {
    title: "Deep Learning",
    icon: creator,
  },
  {
    title: "Socket and Kernal Programing",
    icon: web,
  },
  {
    title: "Cyber Security",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Kernal",
    icon: kernal,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Security",
    icon: security,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern Software Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Dec 2019 - Feb 2020",
    points: [
      "Worked as a full-stack engineer at its subsidiary Escrow.com",
      "Dealt with the React frontend, Python backend and Mysql database of Escrow.com and its admin system, projects were managed through Phabricator and tested via Jenkins",
      "Integrated the Adyen payment gateway to Escrow.com frontend and backend API, resulting in a 90% less chargeback compared to the previously used Paypal gateway",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Eclipse Trading",
    icon: eclipse,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Develop ultra low latency market connectivity libraries for company's trading platforms",
      " Modern C++, template programming, CRTP, lock free programming",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "xx",
    name: "XXX",
    designation: "XXX",
    company: "XXX",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "XXX",
    name: "XXX",
    designation: "XXX",
    company: "XXX",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "XXX",
    name: "XXX",
    designation: "XXX",
    company: "XXX",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TODO",
    description:
      "TODO",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "TODO",
    description:
      "TODO",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "TODO",
    description:
      "TODO",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
