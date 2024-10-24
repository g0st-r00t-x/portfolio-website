// types/index.ts
export interface PersonalInfo {
  name: string;
  age: number;
  location: string;
  email: string;
  phone: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.FC<{ size?: number }>;
}
