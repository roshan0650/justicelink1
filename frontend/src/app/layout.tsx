import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'JusticeLink - AI-Powered Legal Guidance',
  description: 'Access justice instantly with AI-powered legal guidance and connect with verified lawyers.',
  keywords: 'legal help, AI lawyer, justice, legal consultation, law advice',
  authors: [{ name: 'JusticeLink Team' }],
  openGraph: {
    title: 'JusticeLink - AI-Powered Legal Guidance',
    description: 'Access justice instantly with AI-powered legal guidance and connect with verified lawyers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

