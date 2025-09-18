import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { CloseIcon } from './icons/CloseIcon';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = ['About', 'Approach', 'Services', 'Technologies', 'Portfolio', 'Team', 'Testimonials', 'Careers', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = ['home', ...navLinks.map(l => l.toLowerCase())];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, { rootMargin: '-40% 0px -60% 0px' });

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
    });

    return () => {
        window.removeEventListener('scroll', handleScroll);
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.unobserve(element);
        });
    };
  }, []);
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const renderNavLink = (link: string, mobile = false) => {
    const href = `#${link.toLowerCase()}`;
    const isActive = activeSection === link.toLowerCase();
    const activeClass = 'text-purple-500 dark:text-purple-400';
    const inactiveClass = 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400';
    const mobileInactiveClass = 'text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400';
    
    return (
      <a 
        key={link} 
        href={href} 
        onClick={mobile ? handleLinkClick : undefined}
        className={`transition-colors whitespace-nowrap ${isActive ? activeClass : (mobile ? mobileInactiveClass : inactiveClass)} ${mobile ? 'text-lg' : ''}`}
      >
        {link}
      </a>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          VynnTech
        </a>
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map(link => renderNavLink(link))}
        </div>
        <div className="flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
                className="lg:hidden ml-4 p-2 text-gray-800 dark:text-gray-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
         <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map(link => renderNavLink(link, true))}
        </div>
      </div>
    </header>
  );
};

export default Header;