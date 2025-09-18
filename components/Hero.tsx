import React, { useState, useEffect } from 'react';
import ScrollDownIndicator from './ScrollDownIndicator';

const Hero: React.FC = () => {
    const [cubeSize, setCubeSize] = useState(12); // in rem
    const [rotation, setRotation] = useState({ x: 20, y: -30 });

    useEffect(() => {
        const handleResize = () => {
            setCubeSize(window.innerWidth >= 1024 ? 16 : 12);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { offsetWidth, offsetHeight } = currentTarget;
        const x = (clientX / offsetWidth - 0.5) * 2; // -1 to 1
        const y = (clientY / offsetHeight - 0.5) * 2; // -1 to 1
        
        setRotation({
            x: 20 + y * -8, // Base 20deg, range +-8
            y: -30 + x * 8  // Base -30deg, range +-8
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 20, y: -30 }); // Reset to default
    };

    const halfSize = `${cubeSize / 2}rem`;
    const faces = [
        { transform: `rotateY(0deg) translateZ(${halfSize})` },
        { transform: `rotateY(90deg) translateZ(${halfSize})` },
        { transform: `rotateY(180deg) translateZ(${halfSize})` },
        { transform: `rotateY(-90deg) translateZ(${halfSize})` },
        { transform: `rotateX(90deg) translateZ(${halfSize})` },
        { transform: `rotateX(-90deg) translateZ(${halfSize})` },
    ];
  
  return (
    <section 
        id="home" 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
       <div className="absolute inset-0 bg-grid-gray-200/40 dark:bg-grid-gray-900/60 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
          <div className="w-[60rem] h-[60rem] bg-purple-500 rounded-full blur-3xl animate-glow"></div>
       </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
            Innovate. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:200%_auto] animate-shimmer">Create.</span> Elevate.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            VynnTech pioneers next-generation AI solutions and bespoke software, transforming complex challenges into elegant, intelligent realities.
          </p>
          <a
            href="#contact"
            className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2 right-10 lg:right-40 opacity-30 md:opacity-100" style={{ perspective: '1000px' }}>
        <div 
            className="relative animate-float" 
            style={{ 
                width: `${cubeSize}rem`,
                height: `${cubeSize}rem`,
                transformStyle: 'preserve-3d', 
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.2s ease-out'
            }}
        >
          {faces.map((face, i) => (
             <div key={i} className="absolute w-full h-full border-2 border-purple-400 bg-purple-400/10" style={{ transform: face.transform }}></div>
          ))}
        </div>
      </div>
      <ScrollDownIndicator />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
    </section>
  );
};

export default Hero;