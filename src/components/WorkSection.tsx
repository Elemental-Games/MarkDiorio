'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: number;
  title: string;
  description: string;
  color: string;
}

// Project data with colored backgrounds instead of trying to load non-existent image files
const projects: Project[] = [
  {
    id: 1,
    title: 'Elemental Games',
    description: 'Trading card game platform',
    color: '#3b82f6' // Blue
  },
  {
    id: 2,
    title: 'Field Engineering',
    description: 'Technical infrastructure',
    color: '#10b981' // Green
  },
  {
    id: 3,
    title: 'LED Testing System',
    description: 'Precision optical equipment',
    color: '#8b5cf6' // Purple
  },
]

const WorkSection = () => {
  const [current, setCurrent] = useState(0)

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % projects.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev: number) => (prev + 1) % projects.length)
  const prev = () => setCurrent((prev: number) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="work" className="min-h-screen flex items-center py-20" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">My Work</h2>
            <div className="w-20 h-1 mb-8" style={{ backgroundColor: '#4338ca' }}></div>
            <p className="text-lg text-gray-300 mb-6">
              I specialize in creating robust and elegant solutions across various domains. My approach combines technical expertise with creative problem-solving.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From developing efficient algorithms to designing intuitive user interfaces, I&apos;m passionate about crafting impactful experiences.
            </p>
            <button className="px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: '#4338ca' }}>
              View My Projects
            </button>
          </div>

          {/* Right side - Simple Slideshow with colored backgrounds */}
          <div className="relative h-[400px] rounded-xl overflow-hidden" style={{ backgroundColor: '#1e293b' }}>
            {/* Colored background container */}
            <div 
              className="absolute inset-0 flex items-center justify-center p-8"
              style={{ backgroundColor: projects[current].color }}
            >
              <div className="relative w-full h-full flex flex-col">
                <div className="flex-grow flex items-center justify-center">
                  <div className="text-4xl font-bold text-white">{projects[current].title}</div>
                </div>
                <div className="p-4" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
                  <h3 className="text-xl font-bold text-white text-center">{projects[current].title}</h3>
                  <p className="text-gray-300 text-center">{projects[current].description}</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center" 
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
              {projects.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="w-3 h-3 rounded-full"
                  style={{ 
                    backgroundColor: current === index ? '#4338ca' : 'rgba(255, 255, 255, 0.3)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection 