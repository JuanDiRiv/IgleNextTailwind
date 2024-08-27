import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      'bg-transparent': !isScrolled && !isOpen,
      'bg-greenDark': isScrolled || isOpen,
    })}>
      <div id='container' className='flex text-white justify-between p-10 pt-6 pb-6'>
        <div>LOGO</div>
        <div id='menu' className='hidden lg:block'>
          <ul className='flex justify-between gap-10 '>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/Sobre-Nosotros">Sobre Nosotros</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
            <li><Link href="/Devocional">Devocional</Link></li>
            <li><Link href="/Comunidad">Comunidad</Link></li>
            <li><Link href="/Visítanos">Visítanos</Link></li>
          </ul>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none lg:hidden"
          name='menu'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" name='menu' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" name='X' xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <motion.div
          id='hamburguer_menu'
          className='transition-colors duration-300 bg-greenDark'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className='flex justify-between gap-6 flex-col text-white p-10 '>
            <li className='hover:opacity-50 '><Link href="/">Inicio</Link></li>
            <li className='hover:opacity-50'><Link href="/Sobre-Nosotros">Sobre Nosotros</Link></li>
            <li className='hover:opacity-50'><Link href="/Blog">Blog</Link></li>
            <li className='hover:opacity-50'><Link href="/Devocional">Devocional</Link></li>
            <li className='hover:opacity-50'><Link href="/Comunidad">Comunidad</Link></li>
            <li className='hover:opacity-50'><Link href="/Visítanos">Visítanos</Link></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;