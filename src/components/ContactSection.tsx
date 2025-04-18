'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { submitContactForm } from '@/app/actions/contact'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send data to Supabase via server action
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                  isSubmitting
                    ? "bg-purple-800 text-slate-300 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-900/40 border border-green-700 rounded-md text-green-400">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-900/40 border border-red-700 rounded-md text-red-400">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl mb-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4 shadow-lg shadow-purple-500/20">
                    <FaEnvelope className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white">mmdiorio3@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4 shadow-lg shadow-purple-500/20">
                    <FaPhone className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-white">(609) 970-3992</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4 shadow-lg shadow-purple-500/20">
                    <FaMapMarkerAlt className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">Philadelphia, PA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/mark-diorio-898332157/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-colors shadow-lg shadow-purple-500/10"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/mark_diorio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition-colors shadow-lg shadow-purple-500/10"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-purple-900/30 border border-purple-800/50 p-8 rounded-lg shadow-xl shadow-purple-500/30"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Open to Opportunities</h3>
              <p className="text-slate-300">
                I am currently available for work and open to discussing new opportunities. 
                If you have a project that needs a skilled developer, please reach out!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
