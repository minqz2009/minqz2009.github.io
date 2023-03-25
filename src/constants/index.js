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
  project1,
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
    title: "Low Latency C++/C Programing",
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
        name: "tag1",
        color: "blue-text-gradient",
      },
      {
        name: "tag2",
        color: "green-text-gradient",
      },
      {
        name: "tag3",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/minqz2009",
  },
  {
    name: "TODO",
    description:
      "TODO",
    tags: [
      {
        name: "tag1",
        color: "blue-text-gradient",
      },
      {
        name: "tag2",
        color: "green-text-gradient",
      },
      {
        name: "tag3",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/minqz2009",
  },
  {
    name: "TODO",
    description:
      "TODO",
    tags: [
      {
        name: "tag1",
        color: "blue-text-gradient",
      },
      {
        name: "tag2",
        color: "green-text-gradient",
      },
      {
        name: "tag3",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/minqz2009",
  },
];

export { services, technologies, experiences, testimonials, projects };
