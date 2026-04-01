'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Dhrumi Shah</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            Backend Developer & API Specialist
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Specialize in developing scalable backend systems, APIs, and distributed solutions using Node.js, Java Spring Boot, and cloud technologies like AWS. Experienced in optimizing performance, enhancing security, automating deployments, and ensuring high system reliability through CI/CD and end-to-end testing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1WKfDkwnVQR7ibg9-Mzr6EMQwhaTr-gEA', '_blank')}
            >
              <Icon icon="mdi:download" width={20} height={20} />
              <span>Download Resume</span>
            </button>
            
            <button
              className="btn-secondary flex items-center space-x-2 px-8 py-3 text-lg"
              onClick={() => router.push('/projects')}
            >
              <span>View Projects</span>
              <Icon icon="mdi:arrow-right" width={20} height={20} />
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ds4004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Icon icon="mdi:github" width={24} height={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhrumishah02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Icon icon="mdi:linkedin" width={24} height={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
