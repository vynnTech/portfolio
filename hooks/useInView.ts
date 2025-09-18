import { useState, useEffect, RefObject } from 'react';

export const useInView = (ref: RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
    const [isInView, setIsInView] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
            if (entry.isIntersecting && options?.threshold === 1) { // A simple way to disconnect if we only care about it entering once
                 observer.disconnect();
            }
        }, { threshold: 0.1, ...options });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return isInView;
}