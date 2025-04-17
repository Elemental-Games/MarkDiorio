'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)
  
  // Effect for handling canvas sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])
  
  // Mouse movement detection
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)
      
      // Reset isMouseMoving after a delay
      clearTimeout(mouseTimeoutRef.current)
      mouseTimeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false)
      }, 3000)
    }
    
    const mouseTimeoutRef = { current: setTimeout(() => {}, 0) }
    clearTimeout(mouseTimeoutRef.current)
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(mouseTimeoutRef.current)
    }
  }, [])
  
  // Matrix digital rain effect
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height
    
    // Characters to display
    const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const characters = matrix.split("")
    
    const fontSize = 14
    const columns = Math.ceil(dimensions.width / fontSize)
    
    // Array for drops - one per column
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100 // Start outside screen at random positions
    }
    
    // Pulse effect variables
    let pulseTime = 0
    let isPulsing = false
    
    // Draw function
    const draw = () => {
      // Random pulse effect - slower occurrence rate
      if (!isPulsing && Math.random() < 0.001) { // Reduced chance of pulsing
        isPulsing = true
        pulseTime = 0
      }
      
      if (isPulsing) {
        pulseTime += 0.05 // Slower pulse
        if (pulseTime > Math.PI) {
          isPulsing = false
        }
      }
      
      // Calculate pulse opacity
      const pulseOpacity = isPulsing ? 0.05 + Math.sin(pulseTime) * 0.03 : 0.05
      
      // Dark purple BG for the canvas, with opacity for trail effect
      ctx.fillStyle = `rgba(16, 8, 32, ${pulseOpacity})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Purple text (instead of green)
      ctx.font = `${fontSize}px monospace`
      
      // Interactive effect - make drops faster and more visible near mouse position
      const interactionRadius = 100
      
      // Loop through drops - slower speed
      for (let i = 0; i < drops.length; i++) {
        // Only process every other drop to reduce density
        if (i % 2 === 0) {
          continue 
        }
        
        // Calculate position
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // Get character from the matrix
        const text = characters[Math.floor(Math.random() * characters.length)]
        
        // Calculate distance from mouse position
        const dx = x - mousePosition.x
        const dy = y - mousePosition.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Adjust opacity based on distance to mouse
        if (isMouseMoving && distance < interactionRadius) {
          // Brighter color near mouse - purple instead of green
          ctx.fillStyle = `rgba(160, 32, 240, ${1 - distance / interactionRadius})`
          
          // Draw character
          ctx.fillText(text, x, y)
          
          // Increased fall speed near mouse - but slower than before
          drops[i] += 0.3 + (1 - distance / interactionRadius) * 1.2
        } else {
          // Normal color with pulse effect - purple instead of green
          const baseOpacity = 0.6
          const charOpacity = isPulsing 
            ? baseOpacity + Math.sin(pulseTime) * 0.2
            : baseOpacity
            
          ctx.fillStyle = `rgba(160, 32, 240, ${charOpacity})`
          ctx.fillText(text, x, y)
          
          // Regular fall speed with slight variation during pulse - slower overall
          const speedMod = isPulsing ? 1 + Math.sin(pulseTime) * 0.2 : 1
          drops[i] += 0.25 * speedMod // Reduced speed
        }
        
        // Reset position when off screen - with more randomness for varied reappearance
        if (drops[i] * fontSize > dimensions.height && Math.random() > 0.99) {
          drops[i] = 0
        }
      }
      
      requestRef.current = requestAnimationFrame(draw)
    }
    
    // Start the animation
    const requestRef = { current: 0 }
    requestRef.current = requestAnimationFrame(draw)
    
    // Cleanup
    return () => {
      cancelAnimationFrame(requestRef.current)
    }
  }, [dimensions, mousePosition, isMouseMoving])
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-[#110828] opacity-90" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Energy pulse effect - purple instead of green */}
      <motion.div 
        className="absolute inset-0 bg-purple-500/5 pointer-events-none"
        animate={{ 
          opacity: [0, 0.08, 0],
          scale: [1, 1.03, 1]
        }}
        transition={{
          duration: 5, // Slower animation
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Additional floating particles for depth - purple instead of green */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 12, // Slower movement
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default MatrixBackground 