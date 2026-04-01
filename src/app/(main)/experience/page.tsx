'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: 'John Deere',
      position: 'Software Engineer',
      duration: 'Jul 2024 - Present',
      location: 'Pune, Maharashtra, India',
      description: 'Developing backend solutions for enterprise applications, working with scalable APIs and cloud technologies.',
      achievements: [
        'Developed and maintained scalable backend microservices supporting delinquency workflow management for John Deere Financial, processing customer account data pipelines that drive automated case creation in the Pega platform.',
        'Implemented event-driven serverless workflows using AWS Lambda, EventBridge, and Step Functions, enabling asynchronous processing across multiple backend components and integrations.',
        'Contributed to migration of enterprise document templates from Adobe to DOCX format, building document generation and storage pipelines integrated with ECS-based services and vendor workflows via S3.',
        'Maintained and enhanced backend microservices and REST APIs, including experience-layer services, authentication layers, and event-driven integrations supporting enterprise applications.',
        'Improved platform reliability and security by upgrading AWS Lambda services, resolving vulnerabilities, and performing incident analysis across backend systems.'
      ],
      technologies: ['Java', 'Spring Boot', 'Node.js', 'AWS Lambda', 'EventBridge', 'Step Functions', 'ECS', 'ECR', 'S3', 'DynamoDB', 'RDS', 'CloudWatch', 'Next.js', 'MS SQL', 'Jenkins', 'Terraform']
    },
    {
      id: 2,
      company: 'Sanskruti Technologies',
      position: 'Software Engineer Intern',
      duration: 'Jan 2024 - Jun 2024',
      location: 'Surat, Gujarat, India',
      description: 'Built a comprehensive Hospital Management System using MERN stack, implementing full-stack features and deployment automation.',
      achievements: [
        'Collaborated in a 3-member engineering team to design and develop a SaaS-based Hospital Management System using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
        'Built and integrated 10+ RESTful APIs and backend services to manage hospital workflows, including patient records, appointment scheduling, and administrative operations.',
        'Deployed the full-stack application on AWS LightSail and implemented CI/CD pipelines using GitHub Actions to automate builds and deployments across 2 environments: development and production.'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'AWS LightSail', 'GitHub Actions']
    },
    {
      id: 3,
      company: 'John Deere',
      position: 'Software Engineer Intern',
      duration: 'May 2023 - Jul 2023',
      location: 'Pune, Maharashtra, India',
      description: 'Developed RESTful APIs and database solutions for SaaS applications, focusing on performance and scalability.',
      achievements: [
        'Architected a real-time serverless data pipeline using Node.js, AWS Lambda, and DynamoDB Streams, enabling real-time synchronization between 2 distributed DynamoDB tables.',
        'Implemented conditional insert/update logic, processing real-time database events and enabling event-driven data synchronization across backend services.',
        'Delivered 100% unit test coverage and developed a React.js dashboard to visualize DynamoDB data for analysis.'
      ],
      technologies: ['Node.js', 'AWS Lambda', 'DynamoDB', 'React.js']
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
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in backend development, showcasing growth from software engineering intern
            to backend developer at John Deere, working with modern cloud technologies and scalable systems.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon icon="mdi:office-building" className="text-primary-600" width={20} height={20} />
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-gray-300">
                      {experience.company}
                    </h3>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-primary-600 mb-2">
                    {experience.position}
                  </h4>
                  
                  <div className="flex flex-wrap items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon icon="mdi:calendar" width={16} height={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon icon="mdi:map-marker" width={16} height={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold mb-3 text-dark-900 dark:text-blue-400">Key Achievements:</h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h5 className="font-semibold mb-3 text-dark-900 dark:text-blue-400">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-lg text-sm"
                    >
                      {tech}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://www.linkedin.com/in/dhrumishah02/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 px-8 py-3 text-lg"
          >
            <Icon icon="mdi:linkedin" width={20} height={20} />
            <span>View LinkedIn Profile</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
