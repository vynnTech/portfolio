import React, { useEffect } from 'react';
import { Project } from './Portfolio';
import { CloseIcon } from './icons/CloseIcon';

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}
      >
        <div className="sticky top-0 flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Close modal">
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg object-cover shadow-md" />
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-sm text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-900/50 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">The Challenge</h3>
                        <p className="text-gray-600 dark:text-gray-300">{project.details.problem}</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">Our Solution</h3>
                        <p className="text-gray-600 dark:text-gray-300">{project.details.solution}</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">The Result</h3>
                        <p className="text-gray-600 dark:text-gray-300">{project.details.result}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="sticky bottom-0 p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm text-right">
            <a
              href={project.caseStudyUrl}
              className="inline-block bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              View Full Case Study
            </a>
        </div>

      </div>
    </div>
  );
};

export default PortfolioModal;