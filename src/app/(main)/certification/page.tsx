'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

export default function CertificationPage() {
  const achievements = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner',
      description: 'Foundational level certification demonstrating knowledge of AWS Cloud concepts, services, and terminology.',
      category: 'Cloud Certification',
      icon: () => <Icon icon="mdi:aws" width={24} height={24} />,
      color: 'from-orange-500 to-red-500',
      badge: 'Foundational',
      link: 'https://www.credly.com/badges/2ebc5701-eb86-4b96-8275-837319f03381/linked_in_profile'
    }
  ]

  const stats = [
    {
      label: 'Years Experience',
      value: '1.7',
      icon: () => <Icon icon="mdi:briefcase" width={24} height={24} />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      label: 'AWS Certifications',
      value: '1',
      icon: () => <Icon icon="mdi:aws" width={24} height={24} />,
      color: 'from-orange-500 to-red-500'
    },
    {
      label: 'Projects Completed',
      value: '8+',
      icon: () => <Icon icon="mdi:code-braces" width={24} height={24} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Technologies Learned',
      value: '20+',
      icon: () => <Icon icon="mdi:lightbulb" width={24} height={24} />,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="min-h-screen section-padding bg-gray-50 dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building a strong foundation in cloud technologies and full-stack development through 
            certifications and continuous learning in Spring Boot, Node.js, and modern software development practices.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                <stat.icon />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-dark-900 dark:text-gray-300">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                    <achievement.icon />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-dark-900 dark:text-gray-300">
                        {achievement.title}
                      </h4>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {achievement.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {achievement.description}
                    </p>
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-primary-600 font-medium">
                        {achievement.category}
                      </span>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 px-2 py-1 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center gap-1"
                        >
                          View Credential
                          <Icon icon="mdi:arrow-top-right" width={16} height={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ongoing Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-primary-600">
            Learning & Development Goals
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300">AWS Certified Developer - Associate</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">In Progress</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300">Spring Boot Advanced Concepts</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Active Learning</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '55%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300">Node.js & Express.js Development</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Active Learning</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300">Docker & Containerization</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Planning</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '30%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
