'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Define types for our particles and orbs
interface Particle {
  id: number
  size: number
  x: number
  y: number
  duration: number
  delay: number
}

interface GlowingOrb {
  id: number
  size: number
  x: number
  y: number
  duration: number
  delay: number
  moveX: number
  moveY: number
}

const BackgroundEffect = () => {
  // State for particles and orbs with proper types
  const [particles, setParticles] = useState<Particle[]>([])
  const [glowingOrbs, setGlowingOrbs] = useState<GlowingOrb[]>([])
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Generate particles and orbs only on client-side
    if (!initialized) {
      // Create particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: 10 + Math.random() * 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 25 + Math.random() * 20,
        delay: Math.random() * 2,
      }))
      
      // Create orbs
      const newGlowingOrbs = Array.from({ length: 4 }, (_, i) => ({
        id: i,
        size: 200 + Math.random() * 200,
        x: 25 + (i * 20),
        y: 25 + (i * 15),
        duration: 30 + Math.random() * 20,
        delay: i * 5,
        moveX: 50 - (i * 15),
        moveY: 30 - (i * 10),
      }))
      
      setParticles(newParticles)
      setGlowingOrbs(newGlowingOrbs)
      setInitialized(true)
    }
  }, [initialized])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      
      {/* Simpler animated gradient overlay with reduced scaling */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(90, 60, 160, 0.5) 0%, rgba(10, 10, 30, 0) 70%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      {/* Glowing orbs - only render once initialized to prevent hydration mismatch */}
      {initialized && (
        <div className="absolute inset-0">
          {glowingOrbs.map((orb) => (
            <motion.div
              key={`orb-${orb.id}`}
              className="absolute rounded-full bg-indigo-500/10 blur-xl"
              style={{
                width: orb.size,
                height: orb.size,
                left: `${orb.x}%`,
                top: `${orb.y}%`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
                x: [0, orb.moveX, 0],
                y: [0, orb.moveY, 0],
              }}
              transition={{
                duration: orb.duration,
                delay: orb.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
      
      {/* Floating particles - only render once initialized to prevent hydration mismatch */}
      {initialized && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/40"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.2)'
              }}
              animate={{
                x: [0, 30 - Math.random() * 60],
                y: [0, 20 - Math.random() * 40],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
      
      {/* Simplified light blur at the top */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-indigo-500/10 to-transparent" />
    </div>
  )
}

export default BackgroundEffect 