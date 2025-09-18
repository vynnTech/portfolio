import React, { useRef } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / width;
    const y = (e.clientY - top - height / 2) / height;
    const rotateX = y * -20;
    const rotateY = x * 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-xl border border-gray-200 dark:border-gray-800 p-8 transition-transform duration-200 ease-out will-change-transform group overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent"></div>
       <div 
         className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-holographic"
         style={{
           background: 'linear-gradient(90deg, transparent, #a855f7, transparent)',
           backgroundSize: '200% 100%',
         }}
       ></div>
      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
         <div className="mb-4 text-purple-500 dark:text-purple-400">
             {icon}
         </div>
         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
         <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;