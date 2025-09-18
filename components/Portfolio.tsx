import React, { useState } from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  caseStudyUrl: string;
  details: {
    problem: string;
    solution: string;
    result: string;
  };
}

const projects: Project[] = [
  {
    title: 'QuantumLeap AI Platform',
    description: 'A predictive analytics platform for the finance sector, leveraging machine learning to forecast market trends with unprecedented accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    caseStudyUrl: '#',
    details: {
        problem: "Hedge funds struggled with information overload and slow, manual analysis of market data, leading to missed opportunities.",
        solution: "We built a custom AI engine that ingests and analyzes millions of data points in real-time, using NLP and time-series forecasting to identify high-probability trading signals.",
        result: "Clients reported a 25% increase in profitable trades and a 60% reduction in time spent on manual research."
    }
  },
  {
    title: 'Stellar Solutions ERP',
    description: 'A bespoke enterprise resource planning system that streamlined operations, inventory, and logistics for a major retail client.',
    imageUrl: 'https://images.unsplash.com/photo-1587614203976-365c7d6297e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Node.js', 'React', 'Docker', 'PostgreSQL'],
    caseStudyUrl: '#',
     details: {
        problem: "The client's outdated, siloed systems caused inventory discrepancies, fulfillment delays, and poor customer experiences.",
        solution: "We developed a unified, cloud-native ERP from scratch, integrating all business units from supply chain to point-of-sale into a single, real-time dashboard.",
        result: "Achieved a 99.9% inventory accuracy, reduced shipping times by 48 hours, and boosted customer satisfaction scores by 35%."
    }
  },
  {
    title: 'InnovateX Cloud Migration',
    description: 'Successfully migrated a legacy monolithic application to a scalable, serverless microservices architecture on the cloud.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['AWS', 'Kubernetes', 'DevOps', 'CI/CD'],
    caseStudyUrl: '#',
    details: {
        problem: "A monolithic architecture made updates slow, costly, and risky. Scaling to meet peak demand was inefficient and expensive.",
        solution: "We re-architected the entire application into containerized microservices deployed on a Kubernetes cluster, with a full CI/CD pipeline for automated, zero-downtime releases.",
        result: "Reduced infrastructure costs by 40%, increased deployment frequency by 500%, and improved system uptime to 99.99%."
    }
  },
   {
    title: 'ConnectSphere Mobile App',
    description: 'A cross-platform social networking app focused on local community engagement, featuring real-time chat and event organization.',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['React Native', 'Firebase', 'Node.js', 'UX/UI'],
    caseStudyUrl: '#',
    details: {
        problem: "Existing social platforms lacked a focus on hyper-local, real-world connections, leaving a gap for community-building.",
        solution: "We designed and built a mobile app for iOS and Android with geo-location features, group chat, and a user-friendly event creation system to foster local engagement.",
        result: "Grew to 50,000 active users in the first six months post-launch and was featured as a 'New App We Love' on the App Store."
    }
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="portfolio" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Portfolio</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">A Glimpse Into Our Work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <PortfolioCard key={index} onOpenModal={() => setSelectedProject(project)} {...project} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
      <PortfolioModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default Portfolio;