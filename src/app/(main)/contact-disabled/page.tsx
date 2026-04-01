'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

export default function ContactPage() {
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
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to work together or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon icon="mdi:email" className="text-primary-600" width={20} height={20} />
                <div>
                  <p className="font-medium text-dark-900">Email</p>
                  <p className="text-gray-600">john@developer.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon icon="mdi:phone" className="text-primary-600" width={20} height={20} />
                <div>
                  <p className="font-medium text-dark-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon icon="mdi:map-marker" className="text-primary-600" width={20} height={20} />
                <div>
                  <p className="font-medium text-dark-900">Location</p>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-dark-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200">
                  <Icon icon="mdi:linkedin" width={20} height={20} />
                </a>
                <a href="#" className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200">
                  <Icon icon="mdi:github" width={20} height={20} />
                </a>
                <a href="#" className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200">
                  <Icon icon="mdi:twitter" width={20} height={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6">Send Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-dark-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-dark-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-dark-900"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 py-3 text-lg"
              >
                <Icon icon="mdi:send" width={20} height={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
