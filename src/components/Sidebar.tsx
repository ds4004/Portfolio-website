'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react';
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

interface Section {
  id: string
  label: string
  icon: React.ReactNode
  path: string
}

interface SidebarProps {
  sections: Section[]
  activeSection: string
}

function SidebarAvatar() {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
        DS
      </div>
    )
  }

  return (
    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-lg">
      <Image
        src="./profile.png"
        alt="Dhrumi Shah"
        width={96}
        height={96}
        className="object-cover w-full h-full"
        onError={() => setImgError(true)}
      />
    </div>
  )
}

export default function Sidebar({ sections, activeSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
  {isOpen ? <Icon icon="mdi:close" width={24} height={24} /> : <Icon icon="mdi:menu" width={24} height={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out z-40 flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200 flex-shrink-0">
          <div className="text-center">
            <SidebarAvatar />
            <h2 className="text-xl font-bold text-gray-900">Dhrumi Shah</h2>
            <p className="text-sm text-gray-600">Backend Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto min-h-0">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    router.push(section.path)
                    setIsOpen(false)
                  }}
                  className={`
                     w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                     ${pathname === section.path
                      ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-500'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                   `}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/ds4004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Icon icon="mdi:github" width={24} height={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhrumishah02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Icon icon="mdi:linkedin" width={24} height={24} />
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
