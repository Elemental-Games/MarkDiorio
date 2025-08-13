'use client'

import { useState, useEffect } from 'react'

// Experience data
const experiences = [
  {
    id: 1,
    role: 'General Engineer & Test Lead',
    company: 'Federal Aviation Administration',
    period: '2020-Present',
    description: 'Led testing initiatives for critical aviation systems within the National Airspace System. Coordinated with cross-functional teams to ensure reliable and efficient operation of air traffic management systems. Developed and implemented comprehensive test plans for safety-critical infrastructure.',
    logo: 'https://storage.googleapis.com/markdiorio-images/faa-logo.png',
    skills: ['Systems Engineering', 'Test Management', 'Aviation Systems', 'Technical Documentation', 'Project Coordination']
  },
  {
    id: 2,
    role: 'Virtual Reality Lab Intern',
    company: 'Rowan University',
    period: '2017',
    description: 'Assisted in the development and testing of virtual reality applications for educational and research purposes. Collaborated with faculty and students to create immersive learning experiences. Conducted user testing and provided feedback for improving VR interfaces.',
    logo: 'https://storage.googleapis.com/markdiorio-images/rowan-logo.png',
    skills: ['Virtual Reality', 'User Testing', 'Unity3D', 'Research', 'User Experience']
  }
]

// Education information
const education = {
  degree: "Bachelor's Degree",
  institution: "Rowan University",
  major: "B.S. in Electrical & Computer Engineering",
  certificate: "Certificate of Undergraduate Studies in Combat Systems Engineering",
  period: "2018-2022",
  logo: 'https://storage.googleapis.com/markdiorio-images/rowan-logo.png',
  skills: ['Electrical Engineering', 'Computer Engineering', 'Combat Systems', 'Circuit Design', 'Embedded Systems']
}

const ExperienceSection = () => {
  // Start with the FAA experience
  const [activeExp, setActiveExp] = useState(0)

  // When component mounts, set active experience to FAA
  useEffect(() => {
    setActiveExp(0)
  }, [])

  return (
    <section id="experience" className="min-h-screen flex items-center py-20" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Professional Experience</h2>
        <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: '#4338ca' }}></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Jobs */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Work Experience</h3>
            
            {/* Timeline Navigation - Years as bubbles */}
            <div className="flex justify-center mb-8">
              <div className="relative flex space-x-6">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExp(index)}
                    className="flex flex-col items-center"
                  >
                    <div 
                      className="rounded-full flex items-center justify-center px-4 py-2 transition-colors"
                      style={{ backgroundColor: activeExp === index ? '#4338ca' : '#334155' }}
                    >
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Experience Content */}
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden p-6 border border-indigo-900/30 shadow-xl" style={{ minHeight: '400px' }}>
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
                      {exp.logo && (
                        <div className="h-20 w-20 rounded-lg flex items-center justify-center overflow-hidden bg-slate-700/50">
                          <img 
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={72}
                            height={72}
                            className="object-contain max-w-full max-h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null; // Prevent infinite loop
                              target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2272%22%20height%3D%2272%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23ffffff%22%3E' + exp.company + '%3C%2Ftext%3E%3C%2Fsvg%3E';
                            }}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <h4 className="text-lg mb-2" style={{ color: '#818cf8' }}>{exp.company}</h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.skills.map(skill => (
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
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {experiences.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveExp(index)}
                  className={`transition-all duration-300 ${
                    activeExp === index 
                      ? 'w-6 h-2 bg-indigo-500' 
                      : 'w-2 h-2 bg-white/30'
                  } rounded-full`}
                  aria-label={`View experience ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right Column - Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
            
            {/* Year pill for education */}
            <div className="flex justify-center mb-8">
              <div 
                className="rounded-full flex items-center justify-center px-4 py-2"
                style={{ backgroundColor: '#4338ca' }}
              >
                <span className="text-sm font-medium">{education.period}</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden p-6 border border-indigo-900/30 shadow-xl" style={{ minHeight: '400px' }}>
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  {education.logo && (
                    <div className="h-20 w-20 rounded-lg flex items-center justify-center overflow-hidden bg-slate-700/50">
                      <img 
                        src={education.logo}
                        alt={`${education.institution} logo`}
                        width={72}
                        height={72}
                        className="object-contain max-w-full max-h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; // Prevent infinite loop
                          target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2272%22%20height%3D%2272%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23ffffff%22%3E' + education.institution + '%3C%2Ftext%3E%3C%2Fsvg%3E';
                        }}
                      />
                    </div>
                  )}
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
                  {education.skills.map(skill => (
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