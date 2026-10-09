import type { CircularCarouselItem } from '../CircularCarousel';

type TechCategory = {
  name: string;
  subtitle: string;
  icon: string;
};

const technologies: TechCategory[] = [
  { name: 'C++', subtitle: 'Languages', icon: 'cpp' },
  { name: 'Java', subtitle: 'Languages', icon: 'java' },
  { name: 'JavaScript', subtitle: 'Languages', icon: 'js' },
  { name: 'TypeScript', subtitle: 'Languages', icon: 'ts' },
  { name: 'Python', subtitle: 'Languages', icon: 'py' },
  { name: 'React', subtitle: 'Frontend', icon: 'react' },
  { name: 'Tailwind CSS', subtitle: 'Frontend', icon: 'tailwind' },
  { name: 'Node.js', subtitle: 'Backend', icon: 'nodejs' },
  { name: 'Express.js', subtitle: 'Backend', icon: 'express' },
  { name: 'FastAPI', subtitle: 'Backend', icon: 'fastapi' },
  { name: 'PostgreSQL', subtitle: 'Databases', icon: 'postgres' },
  { name: 'MySQL', subtitle: 'Databases', icon: 'mysql' },
  { name: 'MongoDB', subtitle: 'Databases', icon: 'mongodb' },
  { name: 'Redis', subtitle: 'Databases', icon: 'redis' },
  { name: 'Kafka', subtitle: 'Streaming', icon: 'kafka' },
  { name: 'AWS', subtitle: 'Cloud & DevOps', icon: 'aws' },
  { name: 'Docker', subtitle: 'Cloud & DevOps', icon: 'docker' },
  { name: 'Git', subtitle: 'Tools', icon: 'git' },
  { name: 'GitHub', subtitle: 'Tools', icon: 'github' }
];

export const techStack: CircularCarouselItem[] = technologies.map(({ name, subtitle, icon }) => ({
  src: `https://skillicons.dev/icons?i=${icon}`,
  alt: `${name} logo`,
  title: name,
  subtitle
}));
