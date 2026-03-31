'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

export default function SkillsPage() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: () => <Icon icon="mdi:code-tags" className="text-primary-600" width={24} height={24} />, 
      skills: [
        { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-400 to-orange-500' },
        { name: 'Java', level: 85, color: 'from-red-500 to-pink-500' },
        { name: 'Python', level: 70, color: 'from-blue-500 to-cyan-500' },
      ]
    },
    {
      title: 'Backend Technologies',
      icon: () => <Icon icon="mdi:server" className="text-primary-600" width={24} height={24} />, 
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
        { name: 'Spring Boot', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-700' },
      ]
    },
    {
      title: 'Databases',
      icon: () => <Icon icon="mdi:database" className="text-primary-600" width={24} height={24} />, 
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'DynamoDB', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'MS SQL', level: 80, color: 'from-blue-600 to-indigo-600' },
        { name: 'RDS', level: 75, color: 'from-blue-500 to-indigo-500' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: () => <Icon icon="mdi:cloud" className="text-primary-600" width={24} height={24} />, 
      skills: [
        { name: 'AWS Lambda', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'AWS EventBridge', level: 85, color: 'from-blue-500 to-indigo-500' },
        { name: 'AWS Step Functions', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'AWS ECS/ECR', level: 85, color: 'from-orange-400 to-red-400' },
        { name: 'AWS S3', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'AWS CloudWatch', level: 80, color: 'from-gray-600 to-gray-700' },
        { name: 'Terraform', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'Jenkins', level: 75, color: 'from-red-500 to-pink-500' },
        { name: 'GitHub Actions', level: 80, color: 'from-gray-600 to-gray-700' },
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: () => <Icon icon="mdi:monitor" className="text-primary-600" width={24} height={24} />, 
      skills: [
        { name: 'React.js', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 80, color: 'from-gray-800 to-gray-900' },
        { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-400 to-orange-500' },
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: () => <Icon icon="mdi:wrench" className="text-primary-600" width={24} height={24} />, 
      skills: [
        { name: 'REST APIs', level: 90, color: 'from-blue-500 to-indigo-500' },
        { name: 'Microservices Architecture', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Event-Driven Architecture', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CI/CD Pipelines', level: 80, color: 'from-blue-600 to-indigo-600' },
      ]
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
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <category.icon />
                </div>
                <h3 className="text-xl font-bold text-primary-600">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary-600">
              Additional Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Microservices', 'Event-Driven Architecture', 'Serverless Computing', 'REST APIs',
                'AWS EventBridge', 'AWS Step Functions', 'AWS ECS/ECR', 'AWS CloudWatch',
                'Terraform', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines',
                'Document Generation', 'SFTP Integration', 'DynamoDB Streams', 'Pega Platform Integration'
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-center text-sm hover:bg-primary-100 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
