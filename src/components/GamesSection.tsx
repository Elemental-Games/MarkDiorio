'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Game projects
const projects = [
  {
    id: 1,
    name: 'Elekin TCG',
    tagline: 'Masters of Kinbrold',
    description: 'A revolutionary trading card game with a unique elemental system that combines strategic depth with accessible gameplay. Each card in Elekin TCG represents characters and creatures from the mystical world of Kinbrold, where elemental mastery determines the balance of power.',
    features: [
      'Physical and digital versions under simultaneous development',
      'Interactive website with community features',
      'Scalable database architecture for future set expansions',
      'Unique gameplay mechanics centered around elemental mastery'
    ],
    color: '#4338ca',
    buttonLabel: 'Learn More'
  }
]

const GamesSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="games" className="min-h-screen flex items-center py-20" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Elemental Games</h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#4338ca' }}></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Developing cutting-edge gaming experiences that bridge physical and digital realms.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Logo and company info */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col items-center lg:items-start"
          >
            <div className="mb-8 max-w-md relative w-full h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[200px] h-[200px]">
                  <img 
                    src="https://storage.googleapis.com/markdiorio-images/games/Elemental_Logo_Games.jpg"
                    alt="Elemental Games LLC Logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23ffffff%22%3EElemental%20Games%3C%2Ftext%3E%3C%2Fsvg%3E';
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Elemental Games LLC</h3>
              <p className="text-gray-300 mb-6">
                Founded with a vision to create interconnected gaming experiences that seamlessly blend physical and digital worlds. 
                Through innovative technologies and engaging gameplay, Elemental Games is building the future of interactive entertainment.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {['Game Development', 'Web Technologies', 'Cloud Infrastructure', 'Interactive Experiences'].map(tech => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#334155', color: '#e2e8f0' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href="https://elementalgames.gg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 rounded-lg text-white font-medium"
                style={{ backgroundColor: '#4338ca' }}
              >
                Visit Elemental Games
              </a>
            </div>
          </motion.div>
          
          {/* Right side - Flagship game */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2"
          >
            <div 
              className="relative rounded-xl overflow-hidden p-8"
              style={{ 
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#4338ca' }}></div>
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">Elekin TCG</h3>
                <p className="text-xl font-medium mb-4" style={{ color: '#818cf8' }}>Masters of Kinbrold</p>
                <p className="text-gray-300 mb-6">
                  Enter the mystical world of Kinbrold, where elemental mastery determines the balance of power. 
                  Elekin TCG offers an immersive gaming experience that challenges players to master the elements 
                  and build strategies around unique card interactions and synergies.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {projects[0].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span 
                        className="flex-shrink-0 w-5 h-5 rounded-full mr-2 mt-1 flex items-center justify-center"
                        style={{ backgroundColor: '#4338ca' }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 1L3 5L1 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-start">
                <a 
                  href="https://elementalgames.gg/elekin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 rounded-lg text-white font-medium"
                  style={{ backgroundColor: '#4338ca' }}
                >
                  Explore Elekin TCG
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Elemental Games is actively expanding its universe with new sets, gameplay mechanics, and digital platforms.
              Join us on this journey to redefine gaming at the intersection of physical collectibles and digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GamesSection 