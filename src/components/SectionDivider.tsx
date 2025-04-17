'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex justify-center w-full py-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-4/5 max-w-5xl h-0.5"
      >
        {/* Base line */}
        <div className="absolute inset-0 bg-purple-600/50"></div>
        
        {/* Intense glow effect - multiple layers */}
        <div className="absolute inset-0 -top-1 -bottom-1 bg-purple-500/70 blur-sm"></div>
        <div className="absolute inset-0 -top-2 -bottom-2 bg-purple-400/60 blur-md"></div>
        <div className="absolute inset-0 -top-3 -bottom-3 bg-purple-300/40 blur-lg"></div>
        <div className="absolute inset-0 -top-4 -bottom-4 bg-purple-200/30 blur-xl"></div>
        
        {/* Bright center pulse animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>
    </div>
  )
} 