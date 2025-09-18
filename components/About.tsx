import React from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import StatCounter from './StatCounter';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About VynnTech</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Driving the Future of Technology</p>
          </div>
          <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              Founded on the principle of relentless innovation, VynnTech is a collective of visionary engineers, data scientists, and creative thinkers. We are dedicated to building intelligent systems that not only solve today's problems but also anticipate the challenges of tomorrow.
            </p>
            <p>
              Our mission is to empower businesses by integrating cutting-edge Artificial Intelligence and crafting bespoke software solutions. We believe in a collaborative approach, working closely with our clients to turn their ambitious ideas into powerful, scalable, and user-centric products.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-lg">
              <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                <StatCounter end={150} />+
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="p-8 rounded-lg">
              <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                <StatCounter end={50} />+
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
            <div className="p-8 rounded-lg">
              <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                <StatCounter end={1.2} decimals={1} />M+
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Lines of Code</p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default About;