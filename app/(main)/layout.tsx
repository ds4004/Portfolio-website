'use client'
import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'

const sections = [
  { id: 'home', label: 'Home', icon: '🏠', path: '/' },
  { id: 'about', label: 'About', icon: '👨‍💻', path: '/about' },
  { id: 'skills', label: 'Skills', icon: '🛠️', path: '/skills' },
  { id: 'experience', label: 'Experience', icon: '💼', path: '/experience' },
  { id: 'projects', label: 'Projects', icon: '🚀', path: '/projects' },
  { id: 'certification', label: 'Certifications', icon: '🏆', path: '/certification' },
  { id: 'education', label: 'Education', icon: '🎓', path: '/education' },
  // { id: 'contact', label: 'Contact', icon: '📧', path: '/contact' },
]

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar sections={sections} activeSection="home" />
      <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
        {children || (
          <div className="max-w-6xl mx-auto">
            <section className="min-h-screen">
              <Hero />
            </section>
          </div>
        )}
      </main>
    </div>
  )
}
