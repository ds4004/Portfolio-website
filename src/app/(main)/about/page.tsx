'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Image from 'next/image';

function ImageAvatar() {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">
        DS
      </div>
    )
  }

  return (
    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <Image
        src="./profile.png"
        alt="Dhrumi Shah"
        width={256}
        height={256}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export default function AboutPage() {
  const interests = [
    'Backend Engineering',
    'System Design',
    'Cloud Computing',
    'DevOps',
    'Open Source',
    'Hackathons',
    'Reading',
    'Travel',
    'Exploring New Technologies'
  ]

  return (
    <div className="min-h-screen flex items-center section-padding">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate backend developer with a love for clean code, scalable architecture, and solving complex problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <ImageAvatar />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:account" width={20} height={20} className="text-primary-600 rm-1" />
                <span className="text-gray-600">Dhrumi Shah</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:map-marker" width={20} height={20} className="text-primary-600 rm-1" />
                <span className="text-gray-600">Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:calendar" width={20} height={20} className="text-primary-600 rm-1" />
                <span className="text-gray-600">Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:email" width={20} height={20} className="text-primary-600 rm-1" />
                <span className="text-gray-600">dhrumishah02@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.hackerrank.com/dhrumishah02"
                  target="_blank"
                  // rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  title="HackerRank"
                >
                  <Icon icon="simple-icons:hackerrank" width={20} height={20} className="text-primary-600 rm-1" />
                  <span className="text-gray-600">HackerRank</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://leetcode.com/u/ds4004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  title="LeetCode"
                >
                  <Icon icon="simple-icons:leetcode" width={20} height={20} className="text-primary-600 rm-1" />
                  <span className="text-gray-600">LeetCode</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.codechef.com/users/ds4004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  title="CodeChef"
                >
                  <Icon icon="simple-icons:codechef" width={20} height={20} className="text-primary-600 rm-1" />
                  <span className="text-gray-600">CodeChef</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://codeforces.com/profile/ds4004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  title="Codeforces"
                >
                  <Icon icon="simple-icons:codeforces" width={20} height={20} className="text-primary-600 rm-1" />
                  <span className="text-gray-600">Codeforces</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I’m a Backend Software Engineer with 1.7+ years of experience building scalable, cloud-native systems. Currently working at John Deere, I specialize in designing reliable backend services using Java, Node.js, and AWS.
                I enjoy solving real-world problems through clean architecture and efficient system design, and I’m constantly exploring better ways to build systems that scale.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">What I Do</h3>
              <p className="text-gray-600 leading-relaxed">
                I design and build backend systems that power applications at scale. My work focuses on developing microservices, event-driven architectures, and serverless workflows using modern cloud technologies.
                From building APIs to automating workflows and deploying applications on AWS, I aim to create systems that are reliable, maintainable, and production-ready.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">My Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                I believe in building systems with clarity and purpose. My approach combines strong fundamentals with practical engineering.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Write clean, modular, and testable code</li>
                <li>Design systems with scalability and performance in mind</li>
                <li>Prefer simple solutions before complex ones</li>
                <li>Focus on reliability, observability, and real-world usability</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                I value collaboration, continuous learning, and shipping impactful solutions.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
