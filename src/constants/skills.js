import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaPython,
  FaAws,
  FaAndroid,
  FaFigma,
  FaRobot,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiDjango,
  SiMysql,
  SiC,
  SiUbuntu,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiStripe,
  SiPostgresql,
  SiPostman,
  SiGithubactions,
  SiGitlab,
  SiJira,
  SiOpenai,
  SiTensorflow,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const allSkills = [
  { name: 'Flutter', level: 95, color: '#02569B', category: 'mobile', icon: SiFlutter },
  { name: 'Dart', level: 90, color: '#0175C2', category: 'mobile', icon: SiDart },
  { name: 'Firebase', level: 90, color: '#FFCA28', category: 'mobile', icon: SiFirebase },
  { name: 'Cloud Firestore', level: 85, color: '#FFCA28', category: 'mobile', icon: SiFirebase },
  { name: 'Stripe API', level: 85, color: '#635BFF', category: 'mobile', icon: SiStripe },
  { name: 'App Deployment', level: 75, color: '#0F9D58', category: 'mobile', icon: FaAndroid },

  { name: 'React.js', level: 90, color: '#61DAFB', category: 'frontend', icon: FaReact },
  { name: 'Next.js', level: 60, color: '#000000', category: 'frontend', icon: SiNextdotjs },
  { name: 'Vite', level: 85, color: '#646CFF', category: 'frontend', icon: SiVite },
  { name: 'Tailwind CSS', level: 90, color: '#38BDF8', category: 'frontend', icon: SiTailwindcss },
  { name: 'HTML', level: 95, color: '#E34C26', category: 'frontend', icon: FaHtml5 },
  { name: 'CSS', level: 90, color: '#264de4', category: 'frontend', icon: FaCss3Alt },
  { name: 'JavaScript', level: 95, color: '#F0DB4F', category: 'frontend', icon: FaJs },

  { name: 'Node.js', level: 85, color: '#3C873A', category: 'backend', icon: FaNodeJs },
  { name: 'Express.js', level: 80, color: '#FFFFFF', category: 'backend', icon: SiExpress },
  { name: 'Django', level: 75, color: '#092E20', category: 'backend', icon: SiDjango },
  { name: 'REST APIs', level: 85, color: '#4A90E2', category: 'backend', icon: FaNodeJs },
  { name: 'Python', level: 70, color: '#3776AB', category: 'backend', icon: FaPython },

  { name: 'MongoDB', level: 80, color: '#4DB33D', category: 'database', icon: SiMongodb },
  { name: 'MySQL', level: 75, color: '#4479A1', category: 'database', icon: SiMysql },
  { name: 'PostgreSQL', level: 60, color: '#336791', category: 'database', icon: SiPostgresql },

  { name: 'OpenAI API', level: 85, color: '#412991', category: 'ai', icon: SiOpenai },
  { name: 'AI Chatbots', level: 85, color: '#7C6CF6', category: 'ai', icon: FaRobot },
  { name: 'RAG & Prompt Design', level: 80, color: '#9B8AFF', category: 'ai', icon: SiOpenai },
  { name: 'TensorFlow.js', level: 75, color: '#FF6F00', category: 'ai', icon: SiTensorflow },

  { name: 'Git', level: 85, color: '#F1502F', category: 'tools', icon: FaGitAlt },
  { name: 'GitLab', level: 85, color: '#FC6D26', category: 'tools', icon: SiGitlab },
  { name: 'GitHub Actions', level: 75, color: '#2088FF', category: 'tools', icon: SiGithubactions },
  { name: 'Jira', level: 80, color: '#0052CC', category: 'tools', icon: SiJira },
  { name: 'AWS', level: 60, color: '#FF9900', category: 'tools', icon: FaAws },
  { name: 'Postman', level: 70, color: '#FF6C37', category: 'tools', icon: SiPostman },
  { name: 'VS Code', level: 90, color: '#007ACC', category: 'tools', icon: VscCode },
  { name: 'Figma', level: 70, color: '#F24E1E', category: 'tools', icon: FaFigma },
  { name: 'Ubuntu', level: 65, color: '#E95420', category: 'tools', icon: SiUbuntu },
  { name: 'C', level: 75, color: '#A8B9CC', category: 'tools', icon: SiC },
];

export const topSkills = allSkills.filter((skill) =>
  [
    'Flutter',
    'React.js',
    'OpenAI API',
    'AI Chatbots',
    'Node.js',
    'Firebase',
    'GitLab',
    'Jira',
    'Tailwind CSS',
    'MongoDB',
    'JavaScript',
    'Git',
  ].includes(skill.name)
);

export const resumeSkillGroups = [
  {
    category: 'Mobile',
    items: allSkills.filter((s) => s.category === 'mobile').map((s) => ({ name: s.name, level: s.level })),
  },
  {
    category: 'Frontend',
    items: allSkills.filter((s) => s.category === 'frontend').map((s) => ({ name: s.name, level: s.level })),
  },
  {
    category: 'Backend & Database',
    items: [
      ...allSkills.filter((s) => s.category === 'backend'),
      ...allSkills.filter((s) => s.category === 'database'),
    ].map((s) => ({ name: s.name, level: s.level })),
  },
  {
    category: 'AI & Automation',
    items: allSkills.filter((s) => s.category === 'ai').map((s) => ({ name: s.name, level: s.level })),
  },
  {
    category: 'Tools & Workflow',
    items: allSkills.filter((s) => s.category === 'tools').map((s) => ({ name: s.name, level: s.level })),
  },
];

export const getSkillsByCategory = (category) => {
  if (category === 'all') return allSkills;
  return allSkills.filter((skill) => skill.category === category);
};

export const techStack = allSkills.filter((skill) => skill.icon);
