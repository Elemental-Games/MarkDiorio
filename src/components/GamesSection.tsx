'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useAnimation, AnimatePresence } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const features = [
  'Physical and digital versions in development',
  'Interactive website with shop & community features',
  'Scalable architecture for future expansions',
  'Gameplay centered on elemental mastery'
];

// Spotlight Card for Elemental Games
const SpotlightCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(150); mouseY.set(150); }}
      className={`relative w-full h-full rounded-2xl bg-slate-800/60 p-6 md:p-8 border border-slate-700/80 shadow-lg overflow-hidden ${className}`}
      style={{
        backgroundImage: useTransform(
          [smoothMouseX, smoothMouseY],
          ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(167, 139, 250, 0.2), transparent 40%)`
        )
      }}
    >
      {children}
    </motion.div>
  )
}


const GamesSection = () => {
  const cardRef = useRef(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const cardBackControls = useAnimation()

  useEffect(() => {
    if (isFlipped) {
      cardBackControls.start({
        rotateY: -180,
        transition: { type: 'spring', stiffness: 100, damping: 15 }
      });
    } else { // Card is not flipped
      if (isHovered) {
        // Stop shaking when hovered
        cardBackControls.start({
          rotateY: 0,
          transition: { type: 'spring', stiffness: 400, damping: 30 }
        });
      } else {
        // Start shaking when not hovered
        cardBackControls.start({
          rotateY: [0, -12, 12, -7, 7, 0],
          transition: {
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 2.5,
          }
        });
      }
    }
  }, [isFlipped, isHovered, cardBackControls]);

  return (
    <section id="games" className="min-h-screen flex items-center py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-white">Elemental Games</h2>
          <div className="w-24 h-1.5 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Developing cutting-edge gaming experiences that bridge physical and digital realms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-6 w-full h-auto lg:h-[800px]">

          {/* Elemental Games Panel */}
          <motion.div
            className="lg:col-span-1 lg:row-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SpotlightCard className="flex flex-col h-full">
              <div className="flex-grow">
                <img 
                  src="https://storage.googleapis.com/markdiorio-images/Games_Logo1.png"
                  alt="Elemental Games LLC Logo"
                  className="w-40 h-40 object-contain mx-auto mb-6 drop-shadow-[0_0_15px_rgba(128,90,213,0.4)]"
                />
                <h3 className="text-2xl font-bold mb-4 text-center text-white">Elemental Games LLC</h3>
                <p className="text-slate-300 mb-6 text-center">
                  Founded to create interconnected gaming experiences that seamlessly blend physical and digital worlds. Solo developer wearing multiple hats, from design to development.
                </p>
                <div className="w-full h-px bg-slate-700 my-6"></div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Game Development', 'Web Technologies', 'Cloud Infrastructure', 'Interactive Experiences'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full text-sm font-medium bg-slate-700 text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href="https://elementalgames.gg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 block w-full text-center px-6 py-3 rounded-lg text-white font-semibold bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                Visit Elemental Games <FaArrowRight className="inline ml-2" />
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Elekin TCG Main Panel */}
          <motion.div
            className="lg:col-span-2 lg:row-span-3 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/50 via-purple-500/40 to-sky-500/50 shadow-[0_0_50px_rgba(99,102,241,0.3)]">
              <div ref={cardRef} className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900/70 backdrop-blur-xl p-6 md:p-8 flex flex-col">
                <motion.div 
                  className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div 
                  className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl"
                  animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 12, repeat: Infinity }}
                />

                <div className="flex-grow overflow-y-auto pr-2">
                  <img
                    src="/images/Elekin_Kinbrold_Icon.png"
                    alt="Elekin logo"
                    className="mx-auto w-64 md:w-80 h-auto object-contain mb-6 drop-shadow-[0_0_25px_rgba(167,139,250,0.5)]"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                      <div className="md:col-span-2">
                        <p className="text-slate-200 text-lg">
                          Enter the elemental world of Kinbrold, where mastery determines the balance of power. Elekin TCG is an immersive experience that challenges players to build strategies around unique card interactions.
                        </p>
                        <p className="text-slate-300 text-base mt-4">
                          Prepare to challenge opponents, collect rare cards, and carve your legacy in the world of Kinbrold.
                        </p>
                        <div className="mt-8 flex justify-start space-x-6">
                            {['air silver.webp', 'earth silver.webp', 'fire silver.webp', 'water silver.webp'].map((icon, index) => (
                                <motion.div
                                    key={icon}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
                                    className="cursor-pointer"
                                    onClick={() => setSelectedImage(`/images/${icon}`)}
                                >
                                    <img src={`/images/${icon}`} alt={`${icon.split(' ')[0]} element icon`} className="w-16 md:w-20 h-auto" />
                                </motion.div>
                            ))}
                        </div>
                      </div>

                      <div className="w-full" style={{ perspective: 1000 }}>
                          <motion.div
                              className="relative w-full cursor-pointer"
                              style={{ transformStyle: 'preserve-3d', aspectRatio: '63/88' }}
                              onClick={() => setIsFlipped(!isFlipped)}
                              whileHover={{ scale: 1.05 }}
                              onHoverStart={() => setIsHovered(true)}
                              onHoverEnd={() => setIsHovered(false)}
                          >
                              {/* Card faces */}
                              <motion.div
                                  className="absolute w-full h-full"
                                  style={{ backfaceVisibility: 'hidden' }}
                                  animate={{ rotateY: isFlipped ? 0 : 180, scale: isFlipped ? 1.1 : 1 }}
                                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                              >
                                  <img src="/images/veton-r.png" alt="Veton, the Lightning Dragon card" className="w-full h-full object-contain rounded-lg shadow-2xl shadow-black/50" />
                              </motion.div>
                              <motion.div
                                  className="absolute w-full h-full"
                                  style={{ backfaceVisibility: 'hidden' }}
                                  animate={cardBackControls}
                              >
                                  <img src="/images/Card_Back.png" alt="Elekin card back" className="w-full h-full object-contain rounded-lg shadow-2xl shadow-black/50" />
                              </motion.div>
                          </motion.div>
                      </div>
                  </div>
                  <div className="w-full h-px bg-slate-700 my-8"></div>
                  <h4 className="text-xl font-semibold mb-4 text-white">Key Features</h4>
                  <ul className="space-y-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full mr-3 bg-indigo-500/30 border border-indigo-500 flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1L3 5L1 3" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="https://elementalgames.gg/elekin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-8 block w-full text-center px-6 py-3 rounded-lg text-white font-semibold bg-purple-600 hover:bg-purple-500 transition-colors"
                >
                  Explore Elekin TCG
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
            <motion.div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img src={selectedImage} alt="Enlarged element icon" className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg" />
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute -top-3 -right-3 bg-white/80 backdrop-blur-sm text-black rounded-full w-8 h-8 flex items-center justify-center text-2xl font-bold leading-none"
                    >
                        &times;
                    </button>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GamesSection 