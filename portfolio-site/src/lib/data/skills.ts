import { SkillCategory } from '@/types';

export const SKILLS: SkillCategory[] = [

  {
      id: 'frontend',
      title: 'Frontend',
      icon: 'Palette',
      iconColor: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-900/30',
      skills: [
          { name: 'HTML5', icon: 'FaHtml5', level: 'expert' },
          { name: 'CSS3/Tailwind CSS', icon: 'CssAlt', level: 'expert' },
          // { name: 'React.js', icon: 'React', level: 'expert' },
          { name: 'Next.js', icon: 'NextJs', level: 'advanced' },
          { name: 'TypeScript', icon: 'Ts', level: 'intermediate' },
          // { name: 'JavaScript', icon: 'FaJs', level: 'intermediate' },
      ]
  },

  {
      id: 'backend',
      title: 'Backend',
      icon: 'Server',
      iconColor: 'from-violet-500 to-purple-500',
      bgColor: 'bg-purple-900/30',
      skills: [
          // { name: 'Node.js', icon: 'NodeJs', level: 'intermediate' },
          { name: 'Python', icon: 'Python', level: 'expert' },
          { name: 'Django', icon: 'FaPython', level: 'advanced' },    
          { name: 'PHP', icon: 'FaPhp', level: 'intermediate' },
          { name: 'Java', icon: 'FaJava', level: 'intermediate' },
      ]
  },

  {
    id: 'mobile-development',
    title: 'Mobile Development',
    icon: 'Smartphone',
    iconColor: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-900/30',
    skills: [
      { name: 'Flutter', icon: 'SiFlutter', level: 'expert' },
      { name: 'React Native', icon: 'FaReact', level: 'intermediate' },
      { name: 'Java (Android)', icon: 'FaAndroid', level: 'advanced' },
    ],
  },

  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    iconColor: 'from-green-500 to-emerald-500',
    bgColor: 'bg-emerald-900/30',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', level: 'expert' },
      { name: 'MongoDB', icon: 'MongoDB', level: 'intermediate' },
      // { name: 'Redis', icon: 'Redis', level: 'intermediate' },
      { name: 'Firebase', icon: 'Firebase', level: 'advanced' },
      { name: 'Supabase', icon: 'Supabase', level: 'advanced' },
    ],
  },

  {
    id: 'ai-ml-others',
    title: 'AI/ML',
    icon: 'Brain',
    iconColor: 'from-amber-500 to-orange-500',
    bgColor: 'bg-orange-900/30',
    skills: [
      // { name: 'Python/Flask', icon: 'FaPython', level: 'advanced' },
      { name: 'Machine Learning', icon: 'FaBrain', level: 'intermediate' },
      { name: 'TensorFlow', icon: 'TensorFlow', level: 'intermediate' },
      { name: 'OpenAI API', icon: 'Robot', level: 'intermediate' },
      // { name: 'Git/GitHub', icon: 'FaGitAlt', level: 'expert' },
      // { name: 'C++', icon: 'SiCplusplus', level: 'intermediate' },
      // { name: 'PostgreSQL', icon: 'SiPostgresql', level: 'advanced' },
      // { name: 'Docker', icon: 'FaDocker', level: 'beginner' },
    ],
  },

  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: 'GitBranch',
    iconColor: 'from-slate-500 to-gray-600',
    bgColor: 'bg-gray-900/30',
    skills: [
      { name: 'Git/GitHub', icon: 'FaGitAlt', level: 'expert' },
      { name: 'C++', icon: 'SiCplusplus', level: 'advanced' },
      { name: 'CI/CD', icon: 'GitAlt', level: 'advanced' },
      { name: 'Docker', icon: 'FaDocker', level: 'beginner' },
    ],
  },

  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: 'FaUsers',
    iconColor: 'from-green-500 to-emerald-500',
    bgColor: 'bg-emerald-900/30',
    skills: [
      { name: 'Project Management', icon: 'FaTasks', level: 'advanced' },
      { name: 'Problem Solving', icon: 'FaPuzzlePiece', level: 'expert' },
      { name: 'Communication', icon: 'FaComments', level: 'advanced' },
      { name: 'Leadership', icon: 'FaUserTie', level: 'advanced' },
      { name: 'Team Collaboration', icon: 'FaHandshake', level: 'expert' },
    ],
  },
];
