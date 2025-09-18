import React from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { ReactIcon } from './icons/ReactIcon';
import { NodeIcon } from './icons/NodeIcon';
import { PythonIcon } from './icons/PythonIcon';
import { AwsIcon } from './icons/AwsIcon';
import { DockerIcon } from './icons/DockerIcon';
import { KubernetesIcon } from './icons/KubernetesIcon';
import { TensorflowIcon } from './icons/TensorflowIcon';
import { NextjsIcon } from './icons/NextjsIcon';
import { TailwindCssIcon } from './icons/TailwindCssIcon';
import { FigmaIcon } from './icons/FigmaIcon';

const technologies = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextjsIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'TensorFlow', icon: <TensorflowIcon /> },
  { name: 'AWS', icon: <AwsIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'Kubernetes', icon: <KubernetesIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
];

const TechMarquee = () => (
    <div className="relative flex overflow-x-hidden text-gray-500 dark:text-gray-400 group">
      <div className="py-12 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap flex">
        {technologies.concat(technologies).map((tech, index) => (
          <div key={index} className="mx-8 flex flex-col items-center justify-center space-y-2">
              <div className="h-16 w-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                {tech.icon}
              </div>
              <span className="opacity-70 transition-opacity duration-300 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
);


const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Tools of Our Trade</p>
          </div>
        </ScrollFadeIn>
      </div>
      <div className="w-full">
         <TechMarquee />
      </div>
    </section>
  );
};

export default Technologies;