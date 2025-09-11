import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiVite, SiDjango, SiMysql, SiC, SiUbuntu } from "react-icons/si";

export const techStack = [
  // Frontend
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "HTML", icon: FaHtml5, color: "#E34C26" },
  { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
  
  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#fff" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  
  // Programming Languages
  { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  
  // Databases
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  
  // Cloud/Tools
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F" },
];
