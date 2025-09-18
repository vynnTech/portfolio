import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import CursorFollower from './components/CursorFollower';
import Chatbot from './components/Chatbot';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Default for server-side rendering
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    // This effect now correctly handles the preloader defined in index.html
    const rootElement = document.getElementById('root');
    const preloaderElement = document.getElementById('preloader');

    const timer = setTimeout(() => {
      if (preloaderElement) {
        preloaderElement.style.opacity = '0';
        preloaderElement.addEventListener('transitionend', () => {
          preloaderElement.style.display = 'none';
        });
      }
      if (rootElement) {
        rootElement.classList.remove('opacity-0');
        rootElement.classList.add('opacity-100');
      }
    }, 2000); // Increased preloader time for new animation

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="text-gray-800 dark:text-gray-200 font-sans transition-colors duration-500">
        <CursorFollower />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Approach />
          <Services />
          <Technologies />
          <Portfolio />
          <Team />
          <Testimonials />
          <Careers />
          <Contact />
        </main>
        <Footer />
        <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
          <Chatbot />
          <BackToTopButton />
        </div>
      </div>
    </>
  );
}

export default App;