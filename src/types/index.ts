export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface Article {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  readTime: string;
  link: string;
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
  chartData: {
    subject: string;
    A: number;
  }[];
  description: string;
}