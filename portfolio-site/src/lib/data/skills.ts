import { SkillCategory } from '@/types';

export const SKILLS: SkillCategory[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'FaLaptopCode',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-900/30',
    skills: [
      { name: 'HTML5', icon: 'FaHtml5', level: 'expert' },
      { name: 'CSS3/Tailwind', icon: 'FaCss3Alt', level: 'expert' },
      { name: 'JavaScript', icon: 'FaJs', level: 'advanced' },
      { name: 'React', icon: 'FaReact', level: 'advanced' },
      { name: 'Django', icon: 'FaPython', level: 'advanced' },
      { name: 'PHP', icon: 'FaPhp', level: 'intermediate' },
      { name: 'Java', icon: 'FaJava', level: 'intermediate' },
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    icon: 'FaMobileAlt',
    iconColor: 'text-purple-400',
    bgColor: 'bg-purple-900/30',
    skills: [
      { name: 'Flutter', icon: 'SiFlutter', level: 'advanced' },
      { name: 'React Native', icon: 'FaReact', level: 'intermediate' },
      { name: 'Java (Android)', icon: 'FaAndroid', level: 'intermediate' },
    ],
  },
  {
    id: 'ai-ml-others',
    title: 'AI/ML & Others',
    icon: 'FaRobot',
    iconColor: 'text-green-400',
    bgColor: 'bg-green-900/30',
    skills: [
      { name: 'Python/Flask', icon: 'FaPython', level: 'advanced' },
      { name: 'Machine Learning', icon: 'FaBrain', level: 'intermediate' },
      { name: 'Git/GitHub', icon: 'FaGitAlt', level: 'expert' },
      { name: 'C++', icon: 'SiCplusplus', level: 'intermediate' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', level: 'advanced' },
      { name: 'Docker', icon: 'FaDocker', level: 'beginner' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: 'FaUsers',
    iconColor: 'text-pink-400',
    bgColor: 'bg-pink-900/30',
    skills: [
      { name: 'Project Management', icon: 'FaTasks', level: 'advanced' },
      { name: 'Problem Solving', icon: 'FaPuzzlePiece', level: 'expert' },
      { name: 'Communication', icon: 'FaComments', level: 'advanced' },
      { name: 'Leadership', icon: 'FaUserTie', level: 'advanced' },
      { name: 'Team Collaboration', icon: 'FaHandshake', level: 'expert' },
    ],
  },
];
