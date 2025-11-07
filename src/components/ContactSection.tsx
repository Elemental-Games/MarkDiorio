'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full rounded-lg bg-slate-800 p-8 shadow-xl"
          >
            <h3 className="mb-6 text-2xl font-semibold text-white">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-purple-600/20 p-3 shadow-lg shadow-purple-500/20">
                  <FaEnvelope className="text-xl text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white">mmdiorio3@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-purple-600/20 p-3 shadow-lg shadow-purple-500/20">
                  <FaPhone className="text-xl text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white">(609) 970-3992</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-purple-600/20 p-3 shadow-lg shadow-purple-500/20">
                  <FaMapMarkerAlt className="text-xl text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white">Philadelphia, PA</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-lg font-medium text-white">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mark-diorio-898332157/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-700 p-3 shadow-lg shadow-purple-500/10 transition-colors hover:bg-slate-600"
                >
                  <FaLinkedin className="text-xl text-white" />
                </a>
                <a
                  href="https://github.com/Elemental-Games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-700 p-3 shadow-lg shadow-purple-500/10 transition-colors hover:bg-slate-600"
                  aria-label="GitHub: @Elemental-Games"
                >
                  <FaGithub className="text-xl text-white" />
                </a>
                <a
                  href="https://www.instagram.com/markd03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-700 p-3 shadow-lg shadow-purple-500/10 transition-colors hover:bg-slate-600"
                >
                  <FaInstagram className="text-xl text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-lg border border-purple-800/50 bg-purple-900/30 p-8 shadow-xl shadow-purple-500/30"
          >
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">Open to Opportunities</h3>
              <p className="mb-6 text-slate-300">
                Available for software and systems roles across full-stack, DevSecOps, and mission assurance. Happy to talk
                Lockheed missions, YC startups, and anything in between.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="mailto:mmdiorio3@gmail.com"
                className="flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-400"
              >
                <FaEnvelope /> Email Mark
              </a>
              <a
                href="https://www.linkedin.com/in/mark-diorio-898332157/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-indigo-500/50 bg-slate-800 px-4 py-3 text-indigo-200 transition-all duration-300 hover:bg-slate-700"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Elemental-Games"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-indigo-500/50 bg-slate-800 px-4 py-3 text-indigo-200 transition-all duration-300 hover:bg-slate-700"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="tel:16099703992"
                className="flex items-center justify-center gap-2 rounded-md border border-indigo-500/50 bg-slate-800 px-4 py-3 text-indigo-200 transition-all duration-300 hover:bg-slate-700"
              >
                <FaPhone /> Call/Text
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

