import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onOpenModal: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl, tags, onOpenModal }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 transform transition-transform duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="relative z-20 p-6 flex flex-col justify-end h-[400px]">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="h-24 overflow-hidden">
            <p className="text-gray-300 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs text-purple-200 bg-white/10 rounded-full backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center text-purple-300 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 text-left"
        >
          View Details <ArrowRightIcon className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;