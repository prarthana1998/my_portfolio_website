export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link?: string;
  }
  
  export interface WorkExperience {
    company: string;
    position: string;
    duration: string;
    description: string[];
  }
  
  export interface Education {
    institution: string;
    degree: string;
    duration: string;
    description: string;
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }