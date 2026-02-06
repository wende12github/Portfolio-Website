import { NavItem, PersonalInfo, SocialLink } from '@/types';
import { Linkedin, Github, Send, Instagram } from 'lucide-react';

// NAVIGATION ITEMS
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#Certificates' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

// SOCIAL LINKS
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wendmagegn-tajura/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/wende12github',
    icon: Github,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Mark_9412',
    icon: Send,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/wende_9412/',
    icon: Instagram,
  },
];

// PERSONAL INFO
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Wendmagegn Tajura',
  title: 'Full Stack & Mobile Developer',
  tagline: 'Crafting elegant Frontends, robust Backends, and intelligent Mobile solutions with a full stack mindset and AI Powered solutions.',
  email: 'wendmagegn9412@gmail.com',
  phone: '+251 97 215 5129',
  location: 'Addis Ababa, Ethiopia',
  bio: `I'm a software engineering student at AASTU with a strong passion for tech innovation, collaborative problem-solving, and team-driven development. Whether leading a team through tight deadlines or architecting scalable code, I bring energy, creativity, and resilience to every challenge. My strong suits include team collaboration, project leadership, and delivering quality solutions under pressure. I thrive in challenging environments where I can apply my technical skills to solve real-world problems.`,
  resumeUrl: 'https://drive.google.com/file/d/13QGa1RT3SkaJBVuGe1trJfMjHsG8LOP9/view?usp=sharing',
  profileImage: '/images/wendeprofile.png',
  socialLinks: SOCIAL_LINKS,
};

// DYNAMIC SKILLS FOR HERO TYPEWRITER
export const HERO_SKILLS: string[] = [
  'Full Stack Developer',
  'Backend Developer using Django, Python & Java',
  'Mobile App Developer using Flutter & React Native',
  'Model Trainer',
  'Project Manager',
];

// ACHIEVEMENTS
export const ACHIEVEMENTS = [
  {
    emoji: '🥈',
    title: '2nd place in Flutter Mobile app',
    event: '2024 AASTU TechFest Hackathon',
    highlight: true,
  },
  {
    emoji: '🔥',
    title: 'Quarterfinalist',
    event: '2024 A2SV African AI Hackathon',
    subtitle: '(as a Team Leader)',
    highlight: true,
  },
  {
    emoji: '🥈',
    title: '2nd place Winner',
    event: '2025 AASTU TechFest Hackathon',
    subtitle: '(as a Team Leader)',
    highlight: true,
  },
];

// SITE METADATA
export const SITE_CONFIG = {
  title: 'Wendmagegn Tajura | Full Stack & Mobile Developer',
  description: 'Wendmagegn Tajura - Full Stack & Mobile Developer Portfolio, showcasing projects, skills, Machine Learning, Model Trainer and achievements.',
  url: 'https://wendmagegn.dev',
  ogImage: '/images/og-image.png',
  keywords: [
    'Full Stack Developer',
    'Mobile App Developer',
    'Django',
    'Flutter',
    'React Native',
    'Ethiopia Developer',
    'AASTU',
    'Hackathon Winner',
    'Software Engineer',
  ],
};

// ANIMATION VARIANTS
import type { Variants } from 'framer-motion';

export const FADE_IN_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const SCALE_UP: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
