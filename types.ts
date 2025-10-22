
import type { IconType } from 'react-icons';

export interface EducationItem {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}
