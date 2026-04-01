import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhrumi Shah',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
      </head>
      {/* <body className={`${inter.className} bg-white dark:bg-dark-900 text-dark-900 dark:text-white transition-colors duration-300`}> */}
      <body className={`${inter.className} bg-white dark:bg-dark-900 text-dark-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
