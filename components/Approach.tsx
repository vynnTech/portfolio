import React, { useRef } from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { DiscoverIcon } from './icons/DiscoverIcon';
import { DesignIcon } from './icons/DesignIcon';
import { DevelopIcon } from './icons/DevelopIcon';
import { DeployIcon } from './icons/DeployIcon';
import { useInView } from '../hooks/useInView';

const approachSteps = [
    {
        icon: <DiscoverIcon />,
        title: "1. Discover & Define",
        description: "We begin with a deep dive into your vision and goals. Through collaborative workshops, we define project scope, technical requirements, and a roadmap for success.",
        activities: ["Stakeholder Workshops", "Requirement Analysis", "Feasibility Studies", "Strategic Planning"]
    },
    {
        icon: <DesignIcon />,
        title: "2. Design & Prototype",
        description: "Our team translates strategy into intuitive user experiences and robust system architecture. We create interactive prototypes and detailed designs for feedback and validation.",
        activities: ["UX/UI Wireframing", "Interactive Prototyping", "System Architecture Design", "User Testing"]
    },
    {
        icon: <DevelopIcon />,
        title: "3. Develop & Iterate",
        description: "Following agile methodologies, we build your solution in sprints. This iterative process allows for continuous feedback, ensuring the final product is perfectly aligned with your needs.",
        activities: ["Agile Development Sprints", "Continuous Integration", "Code Reviews", "Quality Assurance Testing"]
    },
    {
        icon: <DeployIcon />,
        title: "4. Deploy & Scale",
        description: "We handle the seamless deployment to a scalable cloud infrastructure. Post-launch, we provide ongoing support and optimization to ensure long-term performance and growth.",
        activities: ["Cloud Deployment", "Performance Monitoring", "Scalability Planning", "Ongoing Maintenance"]
    }
];

const ApproachStep = ({ step, index }: { step: typeof approachSteps[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { threshold: 0.5 });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`mb-8 flex justify-between items-center w-full ${!isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className="hidden md:block w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white dark:bg-black w-16 h-14">
                <div className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-all duration-500 ${isInView ? 'bg-purple-600 scale-110 shadow-purple-500/50' : 'bg-gray-400 dark:bg-gray-600'}`}>
                    {step.icon}
                </div>
            </div>
            <div 
                className={`order-1 md:w-5/12 p-6 rounded-lg bg-gray-50 dark:bg-gray-900/50 shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-700 ease-in-out`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isInView ? 'none' : (isEven ? 'translateX(-20px) rotateY(45deg)' : 'translateX(20px) rotateY(-45deg)'),
                    opacity: isInView ? 1 : 0
                }}
            >
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Activities:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                    {step.activities.map(activity => <li key={activity}>{activity}</li>)}
                </ul>
            </div>
        </div>
    );
};

const Approach: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef);

  return (
    <section id="approach" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Approach</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">A Blueprint for Innovation and Success</p>
          </div>
        </ScrollFadeIn>
        <div ref={lineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full z-0">
             <div 
                className="w-full bg-purple-500 rounded-full" 
                style={{ 
                    height: isInView ? '100%' : '0%',
                    transition: 'height 2s ease-out'
                }}
              ></div>
          </div>
          {approachSteps.map((step, index) => (
             <ApproachStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;