import React, { useRef, useEffect, useState } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                if (domRef.current) {
                  observer.unobserve(domRef.current);
                }
            }
        }, { threshold: 0.1 });
        
        const currentRef = domRef.current;
        if (currentRef) {
          observer.observe(currentRef);
        }

        return () => {
          if(currentRef) {
            observer.unobserve(currentRef);
          }
        };
    }, []);

    return (
        <div 
            ref={domRef}
            className={`${className || ''} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};

export default ScrollFadeIn;
