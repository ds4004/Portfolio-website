'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Bulletin',
      description: 'A modern web application for creating and managing digital bulletins. Features a clean, responsive interface for content creation and sharing.',
      category: 'Full-Stack Web App',
      technologies: ['JavaScript', 'React', 'Next.js', 'Vercel'],
      features: ['Responsive Design', 'Content Management', 'Modern UI/UX', 'Fast Deployment'],
      github: 'https://github.com/ds4004/Bulletin',
      // demo: 'https://bulletin-beta.vercel.app',
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 2,
      title: 'Debug Thugs',
      description: 'A collaborative debugging platform designed to help developers troubleshoot code issues together. Built with modern web technologies.',
      category: 'Web Application',
      technologies: ['JavaScript', 'React', 'Node.js', 'Vercel'],
      features: ['Collaborative Debugging', 'Code Sharing', 'Real-time Collaboration', 'Developer Tools'],
      github: 'https://github.com/ds4004/debug_thugs',
      // demo: 'https://debug-thugs.vercel.app',
      stats: { stars: 2, forks: 0, views: 0 }
    },
    {
      id: 3,
      title: 'E-Dashboard',
      description: 'A comprehensive dashboard application for data visualization and analytics. Provides insights through interactive charts and metrics.',
      category: 'Dashboard Application',
      technologies: ['JavaScript', 'React', 'Chart.js', 'Vercel'],
      features: ['Data Visualization', 'Interactive Charts', 'Analytics Dashboard', 'Responsive Layout'],
      github: 'https://github.com/ds4004/E-dashboard',
      demo: 'https://e-dashboard-six.vercel.app',
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 4,
      title: 'E-Shop',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality. Built for modern online retail.',
      category: 'E-Commerce Platform',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      features: ['Product Catalog', 'Shopping Cart', 'Secure Checkout', 'User Authentication'],
      github: 'https://github.com/ds4004/E-Shop',
      demo: null,
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 5,
      title: 'Sparsh Register',
      description: 'A registration system for events and programs. Streamlines the signup process with user-friendly forms and data management.',
      category: 'Registration System',
      technologies: ['JavaScript', 'React', 'Node.js', 'Express.js'],
      features: ['Event Registration', 'User Management', 'Form Validation', 'Data Export'],
      github: 'https://github.com/ds4004/Sparsh-register',
      demo: null,
      stats: { stars: 0, forks: 1, views: 0 }
    }
  ]

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my full-stack development projects, featuring modern web applications, 
            e-commerce platforms, and collaborative tools built with JavaScript and React.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  {/* <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Icon icon="mdi:star" width={16} height={16} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon icon="mdi:source-branch" width={16} height={16} />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon icon="mdi:eye" width={16} height={16} />
                      <span>{project.stats.views}</span>
                    </div>
                  </div> */}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-dark-900 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-dark-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Icon icon="mdi:github" width={20} height={20} />
                  <span>View Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Icon icon="mdi:open-in-new" width={20} height={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/ds4004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 px-8 py-3 text-lg"
          >
            <Icon icon="mdi:github" width={20} height={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
