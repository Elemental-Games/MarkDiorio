'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  link?: string;
}

// Project data with actual image paths
const projects: Project[] = [
  {
    id: 1,
    title: 'Elemental Games',
    description: 'Trading card game platform with digital and physical components',
    imagePath: 'https://storage.googleapis.com/markdiorio-images/eg-site.png',
    link: 'https://www.elementalgames.com/'
  },
  {
    id: 2,
    title: 'Field Engineering',
    description: 'On-site technical infrastructure installation and testing',
    imagePath: 'https://storage.googleapis.com/markdiorio-images/field-work.JPG'
  },
  {
    id: 3,
    title: 'LED Testing System',
    description: 'Precision optical equipment for nighttime visual guidance testing',
    imagePath: 'https://storage.googleapis.com/markdiorio-images/te-test-led.png'
  },
]

const WorkSection = () => {
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev: number) => (prev + 1) % projects.length)
  const prev = () => setCurrent((prev: number) => (prev - 1 + projects.length) % projects.length)

  // Reset loading state when current project changes
  useEffect(() => {
    setLoading(true)
  }, [current])

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
          </div>

          {/* Right side - Image Slideshow */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border border-slate-700/50" style={{ backgroundColor: '#1e293b' }}>
            {/* Image container with relative positioning */}
            <div className="relative w-full h-full">
              {/* Loading spinner */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-900/50">
                  <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Display current project image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={projects[current].imagePath}
                  alt={projects[current].title}
                  onLoad={() => setLoading(false)}
                  className={`w-full h-full object-cover object-center transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    setLoading(false);
                    target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23ffffff%22%3E' + projects[current].title + '%3C%2Ftext%3E%3C%2Fsvg%3E';
                  }}
                />
              </div>
              
              {/* Project title on mobile only */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900/70 backdrop-blur-sm md:hidden">
                <h3 className="text-xl font-bold text-white">{projects[current].title}</h3>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-indigo-900/70 transition-colors z-20 border border-slate-600/30" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-indigo-900/70 transition-colors z-20 border border-slate-600/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
              {projects.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? 'w-6 bg-indigo-500' : 'bg-white/30'}`}
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