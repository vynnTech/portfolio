import React from 'react';

const ScrollDownIndicator = () => {
    return (
        <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-8 h-14 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center items-start p-1">
                <div className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full animate-[scroll-bounce_2s_ease-in-out_infinite]"></div>
            </div>
            {/* Fix: Removed the non-standard "jsx" prop from the <style> tag to resolve a TypeScript error. */}
            <style>{`
                @keyframes scroll-bounce {
                    0% { transform: translateY(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(24px); opacity: 0; }
                }
            `}</style>
        </a>
    );
};

export default ScrollDownIndicator;
