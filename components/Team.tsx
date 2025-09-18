import React from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface TeamMemberProps {
    imageUrl: string;
    name: string;
    role: string;
    bio: string;
    socials: {
        twitter: string;
        linkedin: string;
    }
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ imageUrl, name, role, bio, socials }) => (
    <div className="text-center group">
        <div className="relative inline-block w-40 h-40 rounded-full mb-4">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-gray-700 group-hover:border-purple-500 transition-all duration-300 transform group-hover:scale-105" />
            <div className="absolute inset-0 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{bio}</p>
            </div>
        </div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-purple-500 dark:text-purple-400 mb-2">{role}</p>
        <div className="flex justify-center space-x-4">
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-purple-400 transition-colors">
                <TwitterIcon className="w-5 h-5" />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-purple-400 transition-colors">
                <LinkedInIcon className="w-5 h-5" />
            </a>
        </div>
    </div>
);


const Team: React.FC = () => {
  const teamMembers = [
    {
      imageUrl: 'https://i.pravatar.cc/150?u=person1',
      name: 'Jasmine Chen',
      role: 'Founder & CEO',
      bio: 'Visionary leader with a passion for turning complex problems into elegant AI-driven solutions.',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?u=person2',
      name: 'Leo Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Architect of our robust systems, ensuring scalability and security across all our projects.',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?u=person3',
      name: 'Aria Sharma',
      role: 'Lead AI Scientist',
      bio: 'The brains behind our machine learning models, constantly pushing the boundaries of what is possible.',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?u=person4',
      name: 'Ethan Cole',
      role: 'Head of Product',
      bio: 'Bridges the gap between client needs and technical execution, ensuring user-centric design.',
      socials: { twitter: '#', linkedin: '#' }
    },
     {
      imageUrl: 'https://i.pravatar.cc/150?u=person5',
      name: 'Chloe Davis',
      role: 'Principal Software Engineer',
      bio: 'Expert in crafting clean, efficient code and mentoring our development team.',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?u=person6',
      name: 'Ben Carter',
      role: 'Senior DevOps Engineer',
      bio: 'Master of automation and cloud infrastructure, ensuring seamless deployments.',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?u=person7',
      name: 'Olivia Martinez',
      role: 'UX/UI Design Lead',
      bio: 'Creates intuitive and beautiful interfaces that delight users and drive engagement.',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?u=person8',
      name: 'Noah Taylor',
      role: 'Project Manager',
      bio: 'The organizational powerhouse who keeps every project on track and clients happy.',
      socials: { twitter: '#', linkedin: '#' }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">The Minds Behind the Magic</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                {teamMembers.map(member => (
                    <TeamMemberCard key={member.name} {...member} />
                ))}
            </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Team;