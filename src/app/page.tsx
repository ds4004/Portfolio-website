'use client'

import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import { FaHome, FaUser, FaTools, FaBriefcase, FaRocket, FaTrophy, FaGraduationCap, FaPenNib, FaComments, FaEnvelope } from 'react-icons/fa';

const sections = [
  { id: 'home', label: 'Home', icon: <FaHome />, path: '/' },
  { id: 'about', label: 'About', icon: <FaUser />, path: '/about' },
  { id: 'skills', label: 'Skills', icon: <FaTools />, path: '/skills' },
  { id: 'experience', label: 'Experience', icon: <FaBriefcase />, path: '/experience' },
  { id: 'projects', label: 'Projects', icon: <FaRocket />, path: '/projects' },
  { id: 'certification', label: 'Certifications', icon: <FaTrophy />, path: '/certification' },
  { id: 'education', label: 'Education', icon: <FaGraduationCap />, path: '/education' },
  // { id: 'contact', label: 'Contact', icon: <FaEnvelope />, path: '/contact' },
]

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar sections={sections} activeSection="home" />
      <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <section className="min-h-screen">
            <Hero />
          </section>
        </div>
      </main>
    </div>
  )
}
