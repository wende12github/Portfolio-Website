export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'mobile' | 'web' | 'backend' | 'ai-ml' | 'game';
  year: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  bgColor: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  description: string;
  date: string;
  icon: string;
  iconColor: string;
  bgColor: string;
  type: 'achievement' | 'education' | 'work';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  content: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

import * as React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  resumeUrl: string;
  profileImage: string;
  socialLinks: SocialLink[];
}
