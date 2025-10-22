
import type { EducationItem, ServiceItem, SkillItem, SocialLink, ProjectItem } from './types';
import { 
  BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiLogoWhatsapp, BiLogoFacebook, BiLogoInstagramAlt, BiLogoTiktok 
} from 'react-icons/bi';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiPython, SiSocketdotio, SiMaildotru
} from 'react-icons/si';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: '#', icon: BiLogoLinkedin },
  { name: 'GitHub', url: 'https://github.com/thilankavindu', icon: BiLogoGithub },
  { name: 'Twitter', url: '#', icon: BiLogoTwitter },
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
    { name: 'Whatsapp', url: 'https://api.whatsapp.com/send/?phone=94752079439&text&type=phone_number&app_absent=0', icon: BiLogoWhatsapp },
    { name: 'Facebook', url: 'https://web.facebook.com/kavindu.thilan.10/', icon: BiLogoFacebook },
    { name: 'Instagram', url: 'https://www.instagram.com/uditha_vithanage', icon: BiLogoInstagramAlt },
    { name: 'Tiktok', url: 'https://www.tiktok.com/@uditha_vithanage', icon: BiLogoTiktok },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    date: '2017 - 2019',
    title: 'Primary Education',
    institution: 'R/Rassagala Vidyalaya',
    description: 'G.C.E (Ordinary Level) Examination with ICT. Two "A" passes, Four "B" passes, Three "C" passes.',
  },
  {
    date: '2019 - 2022',
    title: 'Secondary Education',
    institution: 'R/ Ananda Maithreya Central College - AMCC - Balangoda',
    description: 'G.C.E (Advance Level) Examination Commerce Stream. Two “C” passes & "B" Pass.',
  },
  {
    date: '2023 - Present',
    title: 'GDSE - BSc (Hons) in Computer Science',
    institution: 'IJSE | Institute of Software Engineering',
    description: 'Currently pursuing a Graduate Diploma in Software Engineering, leading to a BSc (Hons) in Computer Science.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'Web Development',
    description: 'I provide tailored web development services, creating responsive, user-friendly websites and applications. Specializing in front-end and back-end development, I deliver secure, scalable solutions, including e-commerce and custom functionality.',
  },
  {
    title: 'UI / UX Design',
    description: 'I offer UI/UX design services that focus on creating intuitive and visually appealing digital experiences. By understanding client goals and target audiences, I deliver user-friendly interfaces and optimized user flows to enhance engagement.',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'React JS', icon: FaReact, color: '#61DAFB' },
  { name: 'Node JS', icon: FaNodeJs, color: '#339933' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Express JS', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Python (Tkinter)', icon: SiPython, color: '#3776AB' },
  { name: 'WebSocket', icon: SiSocketdotio, color: '#010101' },
  { name: 'EmailJS', icon: SiMaildotru, color: '#FF6F61' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, user authentication, a shopping cart, and a checkout process. Built with the MERN stack.',
    image: 'https://picsum.photos/seed/project1/400/300',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: '#',
    githubUrl: 'https://github.com/thilankavindu',
  },
  {
    title: 'Real-time Chat App',
    description: 'A web-based chat application allowing users to communicate in real-time. Features include private messaging and user presence indicators.',
    image: 'https://picsum.photos/seed/project2/400/300',
    tags: ['React', 'Socket.IO', 'Node.js', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/thilankavindu',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects. Designed to be responsive, modern, and visually appealing.',
    image: 'https://picsum.photos/seed/project3/400/300',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/thilankavindu',
  },
   {
    title: 'Task Management App',
    description: 'A Kanban-style task management application to help users organize their work. Drag-and-drop functionality for easy task handling.',
    image: 'https://picsum.photos/seed/project4/400/300',
    tags: ['React', 'Redux', 'Firebase'],
    liveUrl: '#',
    githubUrl: 'https://github.com/thilankavindu',
  },
   {
    title: 'Weather Dashboard',
    description: 'A weather application that provides current weather conditions and a 5-day forecast for any city, using a third-party weather API.',
    image: 'https://picsum.photos/seed/project5/400/300',
    tags: ['JavaScript', 'HTML', 'CSS', 'API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/thilankavindu',
  },
   {
    title: 'Blog Platform',
    description: 'A simple blog platform where users can create, read, update, and delete posts. Includes a Markdown editor for writing content.',
    image: 'https://picsum.photos/seed/project6/400/300',
    tags: ['Node.js', 'Express', 'EJS', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/thilankavindu',
  },
];
