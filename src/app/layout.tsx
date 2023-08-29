import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/store/provider'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo app',
  description: 'A Carlos Feliz project :D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
      <Providers>
        <NavBar />
        <main className='container mx-auto px-5 mt-4'>
          {children}
        </main>
      </Providers>
      </body>
    </html>
  )
}
