import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  //TODO: fix The navBar opening the menu and showing the links

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={classNames('fixed w-full z-10 transition-colors duration-300', {
      'bg-transparent': !isScrolled,
      'bg-gray-800': isScrolled,
    })}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white">Logo</h1>
          </div>
          <div className="block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
          <div className={classNames('w-full block flex-grow lg:flex lg:items-center lg:w-auto', {
            'hidden': !isOpen,
          })}>
            <div className="text-sm lg:flex-grow">
              <a href="#sobre-nosotros" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                Sobre Nosotros
              </a>
              <a href="#blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                Blog
              </a>
              <a href="#devocional" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                Devocional
              </a>
              <a href="#comunidad" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                Comunidad
              </a>
              <a href="#visitanos" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
                Visítanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;