import React from 'react';
import ServiceCard from './ServiceCard';
import { AiIcon } from './icons/AiIcon';
import { CloudIcon } from './icons/CloudIcon';
import { CodeIcon } from './icons/CodeIcon';
import ScrollFadeIn from './ScrollFadeIn';

const servicesData = [
  {
    icon: <AiIcon />,
    title: 'AI & Machine Learning',
    description: 'Unlock predictive insights and automation with our custom machine learning models and AI-driven platforms.'
  },
  {
    icon: <CodeIcon />,
    title: 'Custom Software Development',
    description: 'From mobile apps to enterprise systems, we build robust, scalable, and secure software tailored to your specific needs.'
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & DevOps',
    description: 'Optimize your infrastructure with our cloud architecture, CI/CD pipelines, and automated deployment strategies.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">What We Can Do For You</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Services;