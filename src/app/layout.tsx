import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Backend Developer Portfolio',
  description: 'Professional portfolio showcasing backend development skills, projects, and experience',
  keywords: 'backend developer, portfolio, web development, API development, database design',
  icons: {
    icon: './favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
