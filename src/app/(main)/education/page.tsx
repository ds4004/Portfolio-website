'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

export default function EducationPage() {
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
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology and software development.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Icon icon="mdi:school" className="text-primary-600" width={24} height={24} />
              <h3 className="text-xl font-bold text-primary-600 dark:text-blue-400">Bachelor of Technology in Computer Science and Engineering</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              NIT Surat, 2020-2024
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Specialized in software engineering, algorithms, and database systems.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-dark-900 dark:text-blue-400">Relevant Courses:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Data Structures & Algorithms</li>
                <li>• Database Management Systems</li>
                <li>• Software Engineering</li>
                <li>• Computer Networks</li>
                <li>• Operating Systems</li>
              </ul>
            </div>
          </motion.div>

          {/* 12th Education Card with JEE Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Icon icon="mdi:school" className="text-primary-600" width={24} height={24} />
              <h3 className="text-xl font-bold text-primary-600 dark:text-blue-400">Senior Secondary (12th Grade) - Science</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Citizen's School, 2018-2020
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Achieved excellent academic results in Physics, Chemistry, and Mathematics.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-dark-900 dark:text-blue-400">JEE Achievements:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• JEE Advanced 2020 AIR: 14616</li>
                <li>• JEE Mains 2020 AIR: 7560</li>
                <li>• Percentile: 99.33</li>
                <li>• Secured admission to NIT Surat (CSE)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
