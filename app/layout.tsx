import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Proplanex | Smart ERP Intelligence for Modern Textile Production',
  description: 'Proplanex helps factories manage production, inventory, and delivery with AI-powered ERP tools. Precision Planning • Synchronized Production • Next-Gen Intelligence.',
  keywords: ['ERP', 'textile', 'production management', 'inventory', 'AI', 'manufacturing', 'factory software'],
  openGraph: {
    title: 'Proplanex | Smart ERP Intelligence',
    description: 'AI-powered ERP tools for modern textile production',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
