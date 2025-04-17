'use client'

import { motion } from 'framer-motion'
import { FaCode, FaReact, FaClipboardCheck } from 'react-icons/fa'

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      title: "Software Development",
      icon: <FaCode className="text-4xl md:text-5xl text-indigo-400" />,
      description: "Experienced in developing various front and back end systems using Python, C++, JavaScript, and more.",
      tags: ["Python", "C++", "JavaScript", "REST APIs", "Databases"]
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: <FaReact className="text-4xl md:text-5xl text-indigo-400" />,
      description: "Passionate about creating responsive and interactive user interfaces with modern web technologies.",
      tags: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Test & Evaluation",
      icon: <FaClipboardCheck className="text-4xl md:text-5xl text-indigo-400" />,
      description: "5 years of experience as a General Engineer focused on testing high reliability Visual Guidance Landing Systems (VGLS).",
      tags: ["Test Methodology", "Requirements", "Standards", "Reliability"]
    }
  ]

  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center py-20">
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My professional background spans across several domains, with particular expertise in these key areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-500 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-slate-800/50 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-300 mb-6">{skill.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-sm bg-indigo-900/40 rounded-full text-indigo-300 border border-indigo-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing dot accents */}
      <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-indigo-500/40 blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-indigo-500/40 blur-sm"></div>
      <div className="absolute top-3/4 left-1/3 w-4 h-4 rounded-full bg-indigo-500/30 blur-sm"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-indigo-500/30 blur-sm"></div>
    </section>
  )
}

export default SkillsSection 