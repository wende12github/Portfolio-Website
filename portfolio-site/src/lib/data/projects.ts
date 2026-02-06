import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'guadaye-app',
    title: 'Guadaye App',
    shortDescription: 'Home rental platform built with Flutter that connects landlords with tenants.',
    fullDescription: 'A comprehensive home rental platform designed specifically for the Ethiopian market. The app facilitates seamless connections between landlords and tenants, featuring property listings, search functionality, and direct communication channels.',
    image: '/images/projects/guadaye-app.jpg',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    githubUrl: 'https://github.com/wende12github/Guadaye_RentHub',
    featured: true,
    category: 'mobile',
    year: '2025',
    challenges: [
      'Building a user-friendly interface for property listings',
      'Implementing real-time chat functionality',
      'Handling image uploads and optimization',
    ],
    solutions: [
      'Used Flutter for cross-platform mobile development',
      'Integrated Firebase for real-time database and authentication',
      'Implemented efficient image compression algorithms',
    ],
    results: [
      '2nd place at 2025 AASTU TechFest Hackathon',
      'Successfully demo\'d to 500+ attendees',
    ],
  },
  {
    id: 'ai-sign-language-translator',
    title: 'AI Sign Language Translator',
    shortDescription: 'React Native app with Flask backend that translates sign language to text and REAL TIME chat using ML.',
    fullDescription: 'An innovative accessibility solution that bridges the communication gap for the deaf community. The app uses machine learning to recognize sign language gestures and translate them to text in real-time, enabling seamless conversation.',
    image: '/images/projects/engbaba.png',
    technologies: ['React Native', 'Flask', 'Python', 'TensorFlow'],
    githubUrl: 'https://github.com/orgs/Black-Hole-2024/repositories',
    featured: true,
    category: 'ai-ml',
    year: '2024',
    challenges: [
      'Training accurate ML models for sign language recognition',
      'Achieving real-time performance on mobile devices',
      'Building an intuitive chat interface',
    ],
    solutions: [
      'Developed custom TensorFlow models trained on Ethiopian sign language',
      'Optimized models for mobile inference',
      'Created seamless React Native UI with real-time updates',
    ],
    results: [
      'Quarterfinalist at A2SV African AI Hackathon',
      'Demonstrated to accessibility advocates',
    ],
  },
  {
    id: 'timebank-platform',
    title: 'TimeBank Skill-for-Time Exchange Platform',
    shortDescription: 'A web platform where students can exchange services and skills using time credits instead of money.',
    fullDescription: 'TimeBank is a full-stack web application that enables students to exchange services and skills using time-based credits. Built with Django REST Framework backend and React frontend, it features real-time messaging, skill matching, and secure transactions.',
    image: '/images/projects/timebank.png',
    technologies: ['React', 'Tailwind CSS', 'Django', 'DRF', 'Django Channels', 'PostgreSQL', 'Vite'],
    githubUrl: 'https://github.com/wende12github/Silent-Coders',
    featured: true,
    category: 'web',
    year: '2025',
    challenges: [
      'Implementing real-time messaging with WebSockets',
      'Designing a fair time-credit system',
      'Building a scalable matching algorithm',
    ],
    solutions: [
      'Used Django Channels for WebSocket support',
      'Implemented secure transaction logging',
      'Created efficient database queries with PostgreSQL',
    ],
  },
  {
    id: 'ecommerce-capstone',
    title: 'E-commerce Capstone Project',
    shortDescription: 'Flutter E-commerce Capstone Project showcasing robust e-commerce application capabilities.',
    fullDescription: 'A comprehensive e-commerce mobile application built with Flutter, featuring product catalogs, shopping cart, user authentication, and payment integration.',
    image: '/images/projects/ecommerce.png',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    liveUrl: 'https://www.linkedin.com/posts/wendmagegn-tajura_capstoneproject-ecommerceclothingapp-aastu-activity-7178761382845169664-Okxm',
    featured: true,
    category: 'mobile',
    year: '2024',
  },
  {
    id: 'social-media-api',
    title: 'Social Media API',
    shortDescription: 'RESTful backend for a social media platform built with Django.',
    fullDescription: 'A robust RESTful API for a social media platform featuring user authentication, post management, comments, likes, follows, and feed generation algorithms.',
    image: '/images/projects/social-api.png',
    technologies: ['Django', 'DRF', 'PostgreSQL'],
    githubUrl: 'https://github.com/wende12github/GDG-CAPSTONE-Project',
    featured: false,
    category: 'backend',
    year: '2024',
  },
  {
    id: 'ethiopian-checkers',
    title: 'Ethiopian Checkers (Dama)',
    shortDescription: 'Classic Ethiopian board game implemented in Java with GUI.',
    fullDescription: 'A desktop implementation of the traditional Ethiopian board game "Dama" featuring a graphical user interface, AI opponent, and multiplayer mode.',
    image: '/images/projects/dama.png',
    technologies: ['Java', 'Swing'],
    githubUrl: 'https://github.com/wende12github/EthiopianCheckers-DAMA',
    featured: false,
    category: 'game',
    year: '2023',
  },
  {
    id: 'bookstore-website',
    title: 'Bookstore Website',
    shortDescription: 'E-commerce site for books with PHP backend and Tailwind CSS frontend.',
    fullDescription: 'A full-featured online bookstore with user authentication, shopping cart, order management, and admin dashboard for inventory control.',
    image: '/images/projects/bookstore.png',
    technologies: ['PHP', 'Tailwind CSS', 'JavaScript', 'MySQL'],
    githubUrl: 'https://github.com/wende12github/Online-BookStore-Website/tree/development',
    featured: false,
    category: 'web',
    year: '2023',
  },
  {
    id: 'space-invader-game',
    title: 'Space Invader Game',
    shortDescription: 'Classic arcade game built with pure HTML, CSS, and JavaScript.',
    fullDescription: 'A browser-based recreation of the classic Space Invaders arcade game featuring multiple levels, power-ups, and score tracking.',
    image: '/images/projects/space-invader.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/wende12github/Space_Invaders',
    featured: false,
    category: 'game',
    year: '2023',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(project => project.featured);

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS.find(project => project.id === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return PROJECTS.filter(project => project.category === category);
};
