'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BackgroundEffect from './BackgroundEffect'

const TypewriterText = ({ text }: { text: string }) => {
  const words = text.split(', ')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // If we're typing forward
        setDisplayText(currentWord.substring(0, displayText.length + 1))
        
        // If we've completed typing the word
        if (displayText.length === currentWord.length) {
          // Pause at the end of typing
          setTypingSpeed(1800)
          setIsDeleting(true)
        } else {
          setTypingSpeed(120)
        }
      } else {
        // If we're deleting
        setDisplayText(currentWord.substring(0, displayText.length - 1))
        
        // If we've deleted the whole word
        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
          setTypingSpeed(600)
        } else {
          setTypingSpeed(60)
        }
      }
    }, typingSpeed)
    
    return () => clearTimeout(timer)
  }, [displayText, currentWordIndex, isDeleting, typingSpeed, words])
  
  return (
    <div className="inline-block min-h-[2em]">
      <span className="text-indigo-400 font-bold">{displayText}</span>
      <span className="animate-pulse ml-1 text-indigo-300">|</span>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <BackgroundEffect />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="font-mono text-indigo-400 text-2xl md:text-3xl mb-6 font-bold">{'<MarkDiorio />'}</div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Multiple glowing elements around the heading */}
          <motion.div
            className="absolute -inset-10 blur-3xl bg-indigo-500/20 -z-10 rounded-full"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div
            className="absolute -inset-20 blur-3xl bg-blue-500/10 -z-10 rounded-full"
            animate={{ 
              scale: [1.05, 1, 1.05],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          {/* Main heading with enhanced gradient and text shadow */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold mb-8 enhanced-gradient-text tracking-tighter">
            MARK DIORIO
          </h1>
          
          {/* Adding a reflective surface effect */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-4"></div>
        </motion.div>
        
        <motion.div
          className="text-2xl md:text-3xl text-gray-200 tracking-widest font-medium drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col items-center justify-center text-white">
            <TypewriterText text="TEST LEAD, COMPUTER ENGINEER, GAME DEVELOPER, FOUNDER" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <motion.div 
            className="inline-block border-2 border-indigo-400 rounded-full p-3"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: '0 0 15px rgba(129, 140, 248, 0.7)'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-400"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 