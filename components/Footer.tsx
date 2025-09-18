import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GithubIcon } from './icons/GithubIcon';

const Footer: React.FC = () => {
  const navLinks = ['Home', 'About', 'Approach', 'Services', 'Technologies', 'Portfolio', 'Team', 'Testimonials', 'Careers', 'Contact'];

  return (
    <footer className="bg-gray-100 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">VynnTech</h3>
            <p className="text-gray-600 dark:text-gray-400">Innovate. Create. Elevate.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: contact@vynntech.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  <GithubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} VynnTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;