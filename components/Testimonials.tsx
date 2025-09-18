import React, { useState, useEffect } from 'react';
import ScrollFadeIn from './ScrollFadeIn';
import { QuoteIcon } from './icons/QuoteIcon';

const testimonialsData = [
  {
    quote: "VynnTech's AI solution revolutionized our data analysis pipeline, delivering insights we never thought possible. Their team is brilliant, professional, and an absolute pleasure to work with.",
    name: "Elena Vance",
    company: "CEO, QuantumLeap Inc."
  },
  {
    quote: "The custom software they developed for us is robust, scalable, and has significantly improved our operational efficiency. VynnTech delivered beyond our expectations.",
    name: "Marcus Thorne",
    company: "COO, Stellar Solutions"
  },
  {
    quote: "From DevOps to cloud architecture, VynnTech's expertise is unparalleled. They modernized our entire infrastructure, saving us costs and boosting performance.",
    name: "Sofia Reyes",
    company: "CTO, InnovateX"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsData.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Real Stories, Real Results</p>
          </div>
          <div className="relative max-w-3xl mx-auto h-72 md:h-60">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="flex flex-col items-center text-center">
                    <QuoteIcon />
                    <blockquote className="mt-4 text-xl italic text-gray-700 dark:text-gray-300">
                        "{testimonial.quote}"
                    </blockquote>
                    <p className="mt-6 font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-purple-500 dark:text-purple-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="flex justify-center space-x-3 mt-8">
                {testimonialsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Testimonials;