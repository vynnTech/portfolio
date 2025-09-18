import React, { useState } from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const jobOpenings = [
    {
        title: "Senior AI Engineer",
        location: "Remote",
        department: "Engineering",
        description: "Develop and deploy cutting-edge machine learning models that solve real-world business problems. Requires expertise in Python, TensorFlow/PyTorch, and cloud platforms."
    },
    {
        title: "Full-Stack Developer (React & Node.js)",
        location: "New York, NY",
        department: "Engineering",
        description: "Build and maintain scalable web applications and APIs. Strong experience with modern JavaScript frameworks and database technologies is a must."
    },
    {
        title: "Cloud Infrastructure Specialist",
        location: "Remote",
        department: "DevOps",
        description: "Design, implement, and manage our cloud infrastructure. Expertise in AWS/GCP, Kubernetes, and Infrastructure as Code (IaC) is essential."
    },
    {
        title: "Product Manager",
        location: "San Francisco, CA",
        department: "Product",
        description: "Drive the product vision and roadmap for our innovative solutions. Work closely with engineering, design, and clients to deliver exceptional value."
    }
];

const faqItems = [
    {
        question: "What is the company culture like at VynnTech?",
        answer: "Our culture is built on collaboration, innovation, and continuous learning. We encourage curiosity, support professional growth, and celebrate our collective successes. We believe in a healthy work-life balance and offer flexible work arrangements."
    },
    {
        question: "What benefits and perks do you offer?",
        answer: "We offer a comprehensive benefits package including competitive salary, health, dental, and vision insurance, a 401(k) plan with company match, generous paid time off, and an annual budget for professional development."
    },
    {
        question: "What is the interview process?",
        answer: "Our interview process typically consists of three stages: an initial screening call with our recruiter, a technical assessment or portfolio review with the hiring manager, and a final round of interviews with key team members to assess cultural fit and collaboration skills."
    }
]

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-1"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{question}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pb-5 px-1 text-gray-600 dark:text-gray-400">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Join Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
                We're a passionate team of innovators dedicated to building the future of technology. If you're driven by challenges and inspired by creating impactful solutions, you'll feel right at home.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
             <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Current Openings</h3>
             <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                    <div key={index} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900/50 hover:border-purple-500 hover:shadow-md transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">{job.location} &middot; {job.department}</p>
                                <p className="text-gray-700 dark:text-gray-300 mt-3">{job.description}</p>
                            </div>
                            <a href="#" className="ml-6 mt-1 flex-shrink-0 inline-block bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 font-semibold py-2 px-5 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900 transition-colors">
                                Apply
                            </a>
                        </div>
                    </div>
                ))}
             </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-20">
             <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h3>
             <div className="space-y-2">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} question={item.question} answer={item.answer} />
                ))}
             </div>
          </div>

        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Careers;