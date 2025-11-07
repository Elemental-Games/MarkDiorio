'use client'

import { motion } from 'framer-motion'
import { FaCode, FaReact, FaClipboardCheck, FaRocket, FaExternalLinkAlt } from 'react-icons/fa'

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      title: "Full-Stack Engineering",
      icon: <FaCode className="text-4xl md:text-5xl text-indigo-400" />,
      description: "Ship production-grade web platforms from concept through deployment with scalable architectures, observability, and automation.",
      tags: ["TypeScript", "Next.js", "Node.js", "REST APIs", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Defense Background",
      icon: <FaReact className="text-4xl md:text-5xl text-indigo-400" />,
      description: "Familiarity with systems engineering and testing in the defense industry including requirements, testing, evaluation, verification, and validation.",
      tags: ["FAA", "Technical Writing", "VRTM", "T&E", "V&V", "CUGS - Combat Systems"]
    },
    {
      
      id: 3,
      title: "Systems Reliability & QA",
      icon: <FaClipboardCheck className="text-4xl md:text-5xl text-indigo-400" />,
      description: "FAA test lead background brings deep reliability, verification, and compliance practices into every release cycle.",
      tags: ["Test Strategy", "Requirements", "Traceability", "Reliability", "Documentation"]
    },
    {
      id: 4,
      title: "Product Delivery",
      icon: <FaRocket className="text-4xl md:text-5xl text-indigo-400" />,
      description: "Align product vision, customer feedback, and analytics to launch, iterate, and scale multi-domain experiences.",
      tags: ["Roadmapping", "Product Discovery", "Analytics", "Stakeholder Alignment", "Launch Ops"]
    }
  ]

  const productLaunches = [
    {
      id: 'elemental',
      name: 'ElementalGames.gg',
      description: 'Player portal and marketing site for the Elekin trading card universe with dynamic content and animation-driven storytelling.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://elementalgames.gg'
    },
    {
      id: 'gildaero',
      name: 'GildAero.com',
      description: 'Gamified private aviation loyalty prototype featuring interactive quoting flows, onboarding funnels, and lead capture automations.',
      stack: ['React', 'TypeScript', 'Vite', 'Motion Design'],
      link: 'https://gildaero.com'
    },
    {
      id: 'gildedcloak',
      name: 'GildedCloak.com',
      description: 'Luxury apparel microsite with custom theming, responsive storytelling, and an optimized checkout handoff.',
      stack: ['Vanilla JS', 'HTML', 'CSS', 'Netlify'],
      link: 'https://gildedcloak.com'
    },
    {
      id: 'portfolio',
      name: 'MarkDiorio.com',
      description: 'This portfolio: modular component system showcasing aerospace engineering expertise and product launches with motion-driven UI.',
      stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      link: '/'
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
            Mission assurance meets product delivery. I apply FAA-grade V&V discipline, modern DevSecOps, and design-led execution to ship resilient software and systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Production Launches</h3>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
            Four end-to-end web builds shipped since 2023. These projects showcase my ability to ship production-grade web applications with a focus on performance, accessibility, and user experience on both frontend and backend.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productLaunches.map((launch, index) => {
              const isExternal = launch.link.startsWith('http')
              return (
                <motion.a
                  key={launch.id}
                  href={launch.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * index }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group block h-full bg-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-900/30 transition-all duration-500 hover:border-indigo-500/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{launch.name}</h4>
                      <p className="text-sm uppercase tracking-wide text-indigo-300">Launched</p>
                    </div>
                    {isExternal && (
                      <span className="text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                        <FaExternalLinkAlt />
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                    {launch.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {launch.stack.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs md:text-sm bg-indigo-900/40 rounded-full text-indigo-200 border border-indigo-800/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
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