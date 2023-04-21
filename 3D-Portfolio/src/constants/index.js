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
    carrent,
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
      title: "MERN Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
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
      title: "Bachelor's In Computer Science",
      company_name: "KLE University, India",
      icon: starbucks,
      
      iconBg: "#383E56",
      date: "August 2015 - July 2019",
      points: [
        "Pursued undergraduate Degree in Computer Science",
        "Built a strong foundation by taking subjects like algorithms, Data structures, software engineering, computer networks, AI and more.",
        "Implemented learned skills in real-world projects, participated in hackathon, Hosted Android application development workshop",
        "Projects : Traffic detection using image processing, Designing a 3D rubix cube using Computer Graphics, Online Pharmacy Management System, Online Matrimonial site ",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Intern @ Aggreya Consultancies",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - May 2019",
      points: [
        "Collaborated with business analysts and conducted an in-depth analysis that led to a 14% decrease in operating costs.",
        "Facilitated data scientists with analysis that increased sales performance by 21%.",
        "Identified, analyzed, and interpreted trends or patterns in complex data sets by finding correlations and visualizing by charts that resulted in a 20-hour time saving per week.",
        "Acquired, prepared, and cleaned data from clients to assist scientists in creating models that increased revenue by 20%.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Intern @ Cubiccode",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2019 - Jan 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Masters in Computer Science",
      company_name: "George Mason University",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Present",
      points: [
        "Pursuing my Masters in Computer Science.",
        "Explored and Artificial intelligence and Machine learning feild and built numerous projects. Bolstered knowledge of software development with hands on experience. Also learnt Devops.",
        "Projects:Risk Data Quality Check, Federated Learning, Sentiment Analysis and Fine Tuning,Containerized Web Application Deployment with CI/CD pipeline,Survey Form application using angular and spring boot ",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the pleasure of working with Simran on a custom web development project, and I was blown away by her attention to detail and ability to deliver on time and within budget. She is a true professional who always puts the client's needs first, and her expertise in web development is truly impressive. I would highly recommend Simran for any web development projects, big or small.",
      name: "Sarvesh",
      designation: "CFO",
      company: "Cubiccode",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      testimonial:
        "Simran and I had the opportunity of working together on a project to revamp a website, and I was really impressed with her abilities and professionalism. She spent time learning about our objectives and needs, and throughout the process she offered insightful advice. We were pleasantly surprised by the stunning, user-friendly website that was the ultimate product. I wholeheartedly endorse Simran for any web development work.",
      name: "Sajina",
      designation: "Software Engineer",
      company: "Tech Mahindra",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      testimonial:
        "As a computer science professor, I've had the opportunity to collaborate with a lot of gifted students, but Simran stands out as one of the most insightful and knowledgeable DevOps professionals I've ever met. She is an ideal fit for any project due to her comprehensive understanding of DevOps principles and best practices and her prowess in working with cross-functional teams. I wholeheartedly endorse Simran and recommend her without reservation.",
      name: "Virendra",
      designation: "Professor",
      company: "KLE University",
      image: "https://randomuser.me/api/portraits/men/69.jpg",
    },
  ];
  
  const projects = [
    {
      name: "YouTube Clone",
      description:
        "A React JS-based contemporary and responsive imitation of YouTube. Beautiful video sections, unique categories, and user profile pages are all included. The YouTube Data API has also been integrated, allowing the app to play videos directly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialUI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/StackDevPro/YouTubeClone",
    },
    {
      name: "Fullstack Survey Form",
      description:
        "A custom survey form application with Angular and Spring Boot. Created a dynamic UI, RESTful API that also handles user authentication.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Springboot",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/StackDevPro/Angular-Sprinboot-FullStack",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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