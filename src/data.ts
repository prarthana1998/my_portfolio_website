import { Project, WorkExperience, Education, Skill } from './types';

export const projects: Project[] = [
  {
    title: "Journaling Web App",
    description: "A web application aimed at fostering emotional health and resilience through digital journaling. Building with Next.js and PostgreSQL, featuring secure authentication using Clerk.",
    technologies: ["Next.js", "PostgreSQL", "Clerk", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1280",
  },
  {
    title: "Use of Machine Learning in Accelerating Drug Discovery",
    description: "Developed predictive models for acetylcholinesterase inhibitors using molecular descriptors and regression methodologies, achieving an R-squared value of 0.74.",
    technologies: ["Python", "Machine Learning", "Data Science"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1280",
  },
];

export const experience: WorkExperience[] = [
  {
    company: "Hewlett Packard Enterprise",
    position: "Software Engineer",
    duration: "August 2021 - August 2022",
    description: [
      "Developed Python scripts for REST API testing automation, reducing test execution time.",
      "Designed a simulated CI/CD pipeline using Docker and Kubernetes, improving deployment efficiency.",
      "Collaborated in an Agile team, implementing TDD/BDD practices to enhance software reliability.",
    ]
  },
  {
    company: "Hewlett Packard Enterprise",
    position: "Software Engineer Intern",
    duration: "January 2021 - July 2021",
    description: [
      "Developed an automated testing framework using Cypress, leading to the identification of 200+ bugs before release.",
      "Built scalable local environments for testing and debugging microservices, optimizing development cycles for 15+ engineers."
    ]
  },
  {
    company: "ETI Labs",
    position: "Mobile Application Intern",
    duration: "June 2020 - July 2020",
    description: [
      "Led a team of 4 in utilising Flutter for cross-platform app development, streamlining deployment for iOS and Android.",
      "Implemented Firebase backend, reducing setup time by 30% and ensuring real-time data synchronization."
    ]
  }
];

export const education: Education[] = [
  {
    institution: "King's College London",
    degree: "MSc in Advanced Software Engineering",
    duration: "2022 - 2023",
    description: "Dissertation: Use of Machine Learning in Accelerating Drug Discovery (Distinction)"
  },
  {
    institution: "Indira Gandhi Delhi Technical University",
    degree: "B.Tech in Information Technology",
    duration: "2017 - 2021",
    description: "Relevant Coursework: Artificial Intelligence, Cloud Computing, Object-Oriented Programming"
  }
];
export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "C++"]

  },
  {
    category: "Frontend",
    items: ["Next.js","React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["RESTful APIs"]
  },
  {
    category: "Database",
    items: ["SQL", "PostgreSQL"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Jira", "Cypress", "Agile/Scrum"]
  }
];