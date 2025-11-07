'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  industry: string
  summary: string
  highlights: string[]
  stack: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ElementalGames.gg',
    industry: 'Gaming Commerce',
    summary: 'Immersive marketing and player education platform introducing the Elekin trading card universe.',
    highlights: [
      'Built a reusable Next.js component system for world-building content, gameplay mechanics, and release milestones.',
      'Layered brand storytelling with Framer Motion while keeping Core Web Vitals within target budgets.',
      'Deployed on Vercel with optimized media delivery for high-fidelity artwork.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://elementalgames.gg'
  },
  {
    id: 2,
    title: 'GildAero.com',
    industry: 'Travel Loyalty',
    summary: 'Gamified loyalty prototype that turns gameplay into seat upgrades for private aviation travelers.',
    highlights: [
      'Designed an interactive quote simulator with TypeScript-driven pricing logic and aircraft datasets.',
      'Showcased product vision through modular feature sections, market positioning, and onboarding funnels.',
      'Delivered a zero-backend Vite build deployable on static hosting for rapid stakeholder testing.'
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Custom CSS'],
    link: 'https://gildaero.com'
  },
  {
    id: 3,
    title: 'GildedCloak.com',
    industry: 'Luxury Apparel',
    summary: 'Story-driven microsite announcing The Gilded Cloak apparel line with premium visual design.',
    highlights: [
      'Crafted bespoke typography, color systems, and glow treatments tied to the physical product.',
      'Built responsive layouts and scroll choreography without heavy frameworks for fast rendering.',
      'Implemented launch-ready SEO, metadata, and performance tuning for organic discovery.'
    ],
    stack: ['HTML', 'CSS', 'Vanilla JS', 'Netlify'],
    link: 'https://gildedcloak.com'
  },
  {
    id: 4,
    title: 'MarkDiorio.com',
    industry: 'Portfolio Platform',
    summary: 'Full-stack engineering portfolio combining mission-critical FAA experience with product case studies.',
    highlights: [
      'Engineered modular sections for hero, expertise, work, experience, and contact flows.',
      'Integrated motion design, typewriter effects, and ambient backgrounds while preserving accessibility.',
      'Automated deployments and preview environments to iterate quickly on new case studies.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: '/'
  }
]

const WorkSection = () => {
  return (
    <section id="work" className="min-h-screen flex items-center py-20" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Featured Launches</h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#4338ca' }}></div>
          <p className="text-lg text-gray-300">
            I partner with founders and teams to take ideas from whiteboard to production—delivering polished, measurable web experiences across gaming, loyalty, apparel, and personal branding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-500 shadow-xl flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">{project.industry}</p>
                </div>
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:text-white transition-colors"
                >
                  Visit site
                  <FaExternalLinkAlt className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.summary}</p>

              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed mb-6">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="text-indigo-400 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs uppercase tracking-wide bg-indigo-900/40 text-indigo-200 border border-indigo-800/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection