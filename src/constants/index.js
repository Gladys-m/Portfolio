import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    callastyle,
    byg,
    diversity,
    mo,
    carrent,
    portfolio,
    stuffpulse,
    technium,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Digital Marketer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
];
  
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
];
  
const experiences = [
    {
      title: "Digital Marketer",
      company_name: "Callastyle",
      icon: callastyle,
      iconBg: "#383E56",
      date: "Oct 2023 - Current",
      points: [
        "Conducting in-depth research to understand the target audience, their preferences, and behavior, ensuring that marketing efforts align with customer needs.",
        "Creating and curating engaging content, growing the company's social media presence, and fostering community engagement across platforms like Instagram, TikTok, and Facebook.",
        "Developing and implementing effective online advertising campaigns, optimizing for various platforms like Google Ads and social media.",
        "Regularly monitoring and analyzing digital marketing performance, identifying opportunities for improvement, and providing data-driven recommendations for optimizing campaigns and content.",
      ],
    },
    {
      title: "Facebook Ads Manager",
      company_name: "Beyondgoods",
      icon: byg,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Aug 2023",
      points: [
        "Develop and execute Facebook advertising campaigns to meet specific marketing objectives and target audiences effectively.",
        "Create compelling ad creatives, test and refine ad copy and visuals, and continuously optimize ad performance to achieve desired results.",
        "Analyze campaign performance metrics, provide insights, and generate regular reports to inform decision-making and refine ad strategies.",
      ],
    },
    {
      title: "IT Support Intern",
      company_name: "Diversity Microcredit Ltd",
      icon: diversity,
      iconBg: "#383E56",
      date: "March 2021 - Aug 2021",
      points: [
        "Monitored and maintained the organization's computer systems, ensuring seamless operations.",
        "Worked with the consumer relations and IT team to identify and implement software and system improvements, enhancing overall efficiency.",
        "Managed the company's online presence, including social media accounts and website updates, fostering digital engagement",
      ],
    },
    {
      title: "Social Media Manager",
      company_name: "MO & Beyond ltd",
      icon: mo,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - June 2021",
      points: [
        "Strategically aligned social media marketing strategies to effectively promote and enhance product marketing initiatives.",
        "Developed engaging visual content, videos, and compelling copywriting, resulting in a significant increase in consumer engagement.",
        "Applied search analytics insights to refine content strategies on Facebook and Instagram, consistently improving performance metrics.",
      ],
    },
];
  
const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
  
const projects = [
    {
      name: "Technium",
      description:
        "Web-based platform that helps brand grow bt providing services such as UX design, Web development and Socoal Media Maketing.",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: technium,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "Web application that talks about my experiences and projects as a web developer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "StuffPulse",
      description:
        "A web apllication that allows employees to create, edit and delete details such as username and ID.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: stuffpulse,
      source_code_link: "https://github.com/",
    },
];
  
export { services, technologies, experiences, testimonials, projects };