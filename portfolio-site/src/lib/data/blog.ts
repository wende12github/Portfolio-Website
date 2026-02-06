import { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-sign-language-translator-technical-breakdown',
    title: 'How We Built an AI Sign Language Translator',
    excerpt: 'A technical breakdown of our hackathon project that translates sign language to text in real-time using React Native and TensorFlow.',
    coverImage: '/images/blog/ai-translator.jpg',
    date: '2024-08-15',
    readTime: '8 min read',
    tags: ['Machine Learning', 'React Native', 'Flask', 'Accessibility'],
    author: 'Wendmagegn Tajura',
  },
  {
    id: '2',
    slug: 'from-learner-to-leader-hackathon-journey',
    title: 'From Learner to Leader: My Journey Through Hackathons',
    excerpt: 'Leading my team to 2nd place at the 2025 AASTU TechFest Hackathon was more than just a win—it was a testament to growth, teamwork, and resilience.',
    coverImage: '/images/blog/hackathon-journey.jpg',
    date: '2025-05-07',
    readTime: '6 min read',
    tags: ['Leadership', 'Hackathon', 'Team Management', 'Personal Growth'],
    author: 'Wendmagegn Tajura',
  },
  {
    id: '3',
    slug: 'building-scalable-apis-django-drf',
    title: 'Building Scalable APIs with Django REST Framework',
    excerpt: 'Learn how to architect and build production-ready APIs using Django REST Framework with best practices for performance and security.',
    coverImage: '/images/blog/django-api.jpg',
    date: '2025-01-20',
    readTime: '10 min read',
    tags: ['Django', 'REST API', 'Backend', 'Python'],
    author: 'Wendmagegn Tajura',
  },
  {
    id: '4',
    slug: 'flutter-vs-react-native-developers-perspective',
    title: 'Flutter vs React Native: A Developer\'s Perspective',
    excerpt: 'An honest comparison of Flutter and React Native based on real project experience, covering performance, developer experience, and use cases.',
    coverImage: '/images/blog/flutter-react-native.jpg',
    date: '2024-12-10',
    readTime: '7 min read',
    tags: ['Flutter', 'React Native', 'Mobile Development', 'Comparison'],
    author: 'Wendmagegn Tajura',
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
