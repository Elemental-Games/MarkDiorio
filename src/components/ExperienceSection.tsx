'use client'

import { useState, useEffect } from 'react'

// Swapping the order of experiences in the array for display purposes
const experiences = [
  {
    id: 2,
    role: 'Virtual Reality Lab Intern',
    company: 'Rowan University',
    period: '2019',
    description: 'Assisted in the development and testing of virtual reality applications for educational and research purposes. Collaborated with faculty and students to create immersive learning experiences. Conducted user testing and provided feedback for improving VR interfaces.',
    logo: '/file.svg' // Using file.svg as a placeholder
  },
  {
    id: 1,
    role: 'General Engineer & Test Lead',
    company: 'Federal Aviation Administration',
    period: '2020-Present',
    description: 'Led testing initiatives for critical aviation systems within the National Airspace System. Coordinated with cross-functional teams to ensure reliable and efficient operation of air traffic management systems. Developed and implemented comprehensive test plans for safety-critical infrastructure.',
    logo: '/globe.svg' // Using globe.svg as a placeholder for the FAA logo
  }
]

// Education information
const education = {
  degree: "Bachelor's Degree",
  institution: "Rowan University",
  gpa: "3.34 GPA",
  major: "B.S. in Electrical & Computer Engineering",
  certificate: "Certificate of Undergraduate Studies in Combat Systems Engineering",
  period: "2018-2022",
  logo: '/file.svg' // Using file.svg as a placeholder
}

const ExperienceSection = () => {
  // Start with the FAA experience (index 1 now after swapping order)
  const [activeExp, setActiveExp] = useState(1)

  // When component mounts, set active experience to FAA (index 1)
  useEffect(() => {
    setActiveExp(1)
  }, [])

  return (
    <section id="experience" className="min-h-screen flex items-center py-20" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Professional Experience</h2>
        <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#4338ca' }}></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Jobs */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Jobs</h3>
            
            {/* Timeline Navigation - Years as bubbles */}
            <div className="flex justify-center mb-6">
              <div className="relative flex space-x-12">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExp(index)}
                    className="flex flex-col items-center"
                  >
                    <div 
                      className="rounded-full flex items-center justify-center px-4 py-2"
                      style={{ backgroundColor: activeExp === index ? '#4338ca' : '#334155' }}
                    >
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Experience Content */}
            <div className="relative bg-slate-800/50 rounded-lg overflow-hidden p-6" style={{ minHeight: '360px' }}>
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`absolute inset-0 p-6 transition-opacity duration-500 ${
                    activeExp === index ? 'opacity-100 z-10' : 'opacity-0'
                  }`}
                  style={{ pointerEvents: activeExp === index ? 'auto' : 'none' }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                        <img src={exp.logo} alt={exp.company} className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <h4 className="text-lg mb-2" style={{ color: '#818cf8' }}>{exp.company}</h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {index === 1 ? // Now checking for index 1 for FAA skills
                        ['Systems Engineering', 'Test Management', 'Aviation Systems', 'Technical Documentation', 'Project Coordination'].map(skill => (
                          <span 
                            key={skill}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: '#334155', color: '#e2e8f0' }}
                          >
                            {skill}
                          </span>
                        ))
                        :
                        ['Virtual Reality', 'User Testing', 'Unity3D', 'Research', 'User Experience'].map(skill => (
                          <span 
                            key={skill}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: '#334155', color: '#e2e8f0' }}
                          >
                            {skill}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {experiences.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveExp(index)}
                  className="w-3 h-3 rounded-full"
                  style={{ 
                    backgroundColor: activeExp === index ? '#4338ca' : 'rgba(255, 255, 255, 0.3)'
                  }}
                  aria-label={`View experience ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right Column - Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
            
            {/* Year pill for education - Moved right below Education heading */}
            <div className="flex justify-center mb-6">
              <div 
                className="rounded-full flex items-center justify-center px-4 py-2"
                style={{ backgroundColor: '#4338ca' }}
              >
                <span className="text-sm font-medium">{education.period}</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg overflow-hidden p-6" style={{ minHeight: '360px' }}>
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                    <img src={education.logo} alt={education.institution} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
                    <h4 className="text-lg mb-1" style={{ color: '#818cf8' }}>{education.institution}</h4>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                    <h5 className="text-lg font-semibold mb-1">{education.major}</h5>
                    <div className="text-gray-300">{education.gpa}</div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <h5 className="text-lg font-semibold mb-1">Certificate</h5>
                    <div className="text-gray-300">{education.certificate}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Electrical Engineering', 'Computer Engineering', 'Combat Systems', 'Circuit Design', 'Embedded Systems'].map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: '#334155', color: '#e2e8f0' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection 