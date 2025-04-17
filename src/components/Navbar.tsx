'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <header 
      className={`fixed top-0 right-0 w-full z-50 px-6 py-6 transition-all duration-500 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-xl shadow-indigo-900/20' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-indigo-400 font-mono text-2xl md:text-3xl font-bold"
        >
          {'<MD />'}
        </motion.div>
        
        {/* Desktop Menu */}
        <motion.nav 
          className="hidden md:flex space-x-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group"
            >
              <motion.span
                className="inline-block text-lg text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>
        
        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-400 p-2 focus:outline-none"
          >
            <div className="w-8 flex flex-col items-end justify-center space-y-2">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-0.5 bg-indigo-400 block transition-transform"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-3/4 h-0.5 bg-indigo-400 block"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-0.5 bg-indigo-400 block transition-transform"
              />
            </div>
          </button>
        </motion.div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md mt-6 rounded-lg border border-indigo-900/30 shadow-xl shadow-indigo-900/20"
          >
            <motion.nav className="flex flex-col space-y-4 p-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-300 hover:text-indigo-400 py-3 px-4 border-l-2 border-indigo-900/50 hover:border-indigo-400 transition-colors duration-300"
                >
                  <span className="font-mono text-indigo-400 mr-2 font-bold">{index + 1}.</span> {item.name}
                </motion.a>
              ))}
            </motion.nav>
            
            {/* Subtle info in mobile menu */}
            <div className="p-6 border-t border-indigo-900/30">
              <div className="text-sm text-indigo-300/80 space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-400 mr-3 glow-sm"></div>
                  <span className="font-medium">Available for work</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-400/60 mr-3"></div>
                  <span className="font-medium">Based in San Francisco, CA</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar 