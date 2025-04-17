'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false)
  const [displayText, setDisplayText] = useState(text)
  
  // Characters to use for glitch effect
  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`"
  
  useEffect(() => {
    // Randomly trigger glitch effect - less frequent
    const glitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() < 0.08 // 8% chance of glitching (reduced from 10%)
      if (shouldGlitch) {
        setIsGlitching(true)
        
        // Create glitch animation
        let glitchCount = 0
        const maxGlitches = 2 + Math.floor(Math.random() * 3) // Fewer glitches (2-4 instead of 3-7)
        
        const glitchAnimation = setInterval(() => {
          if (glitchCount >= maxGlitches) {
            clearInterval(glitchAnimation)
            setDisplayText(text) // Restore original text
            setIsGlitching(false)
            return
          }
          
          // Create glitched text by replacing random characters
          const glitchedText = text.split('').map(char => {
            // 12% chance to replace each character (reduced from 15%)
            return Math.random() < 0.12 
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char
          }).join('')
          
          setDisplayText(glitchedText)
          glitchCount++
        }, 150) // Slower animation (150ms instead of 100ms)
      }
    }, 4000) // Check less frequently (4 seconds instead of 3)
    
    return () => {
      clearInterval(glitchInterval)
    }
  }, [text])
  
  return (
    <motion.span
      className={`relative inline-block ${className} ${isGlitching ? 'text-purple-400' : ''}`}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 0], // Reduced movement
        y: [0, 1, 0, 1, 0], // Reduced movement
      } : {}}
      transition={{ duration: 0.3, repeat: isGlitching ? 1 : 0 }} // Slower and fewer repeats
    >
      {displayText}
      
      {/* Glitch overlay effects */}
      {isGlitching && (
        <>
          <motion.span 
            className="absolute left-0 top-0 w-full h-full text-pink-500 opacity-40" // Changed to pink
            style={{ clipPath: 'polygon(0 35%, 100% 35%, 100% 45%, 0 45%)' }} // Reduced area
            animate={{ x: [-1, 1, -1, 0] }} // Reduced movement
            transition={{ duration: 0.3, repeat: 1 }} // Slower and fewer repeats
          >
            {displayText}
          </motion.span>
          
          <motion.span 
            className="absolute left-0 top-0 w-full h-full text-indigo-500 opacity-40" // Changed to indigo
            style={{ clipPath: 'polygon(0 65%, 100% 65%, 100% 70%, 0 70%)' }} // Reduced area
            animate={{ x: [1, -1, 1, 0] }} // Reduced movement
            transition={{ duration: 0.3, repeat: 1 }} // Slower and fewer repeats
          >
            {displayText}
          </motion.span>
        </>
      )}
    </motion.span>
  )
}

export default GlitchText 