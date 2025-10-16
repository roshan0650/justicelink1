'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container-max flex justify-between items-center py-4">
          <div className="font-poppins font-bold text-2xl text-primary-600">
            ⚖️ JusticeLink
          </div>
          <div className="flex gap-6 items-center">
            <Link href="#features" className="text-gray-600 hover:text-primary-600 transition">
              Features
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary-600 transition">
              About
            </Link>
            {isAuthenticated && user ? (
              <div className="flex gap-4 items-center">
                <span className="text-gray-700 font-semibold">
                  👤 {user.name}
                </span>
                <button
                  onClick={logout}
                  className="btn-primary text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/auth/login" className="btn-primary text-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 container-max"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-gray-900 mb-6">
            AI-Powered Legal Guidance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Justice for Every Voice. Get instant legal guidance, connect with verified lawyers, and access justice affordably.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/problem-input" className="btn-primary">
              Get Help Now
            </Link>
            <Link href="/lawyer-signup" className="btn-outline">
              Join as a Lawyer
            </Link>
          </div>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: '🤖', title: 'AI Analysis', desc: 'Instant legal issue classification' },
            { icon: '⚖️', title: 'Expert Lawyers', desc: 'Connect with verified professionals' },
            { icon: '📋', title: 'Legal Templates', desc: 'Download ready-to-use documents' },
          ].map((item, idx) => (
            <div key={idx} className="card text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-poppins font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16">
            How JusticeLink Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Describe', desc: 'Tell us your legal issue in simple words' },
              { num: '2', title: 'Analyze', desc: 'AI classifies and summarizes your case' },
              { num: '3', title: 'Recommend', desc: 'Get actionable next steps and resources' },
              { num: '4', title: 'Connect', desc: 'Meet verified lawyers in your area' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-max text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6">
            Ready to Access Justice?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start your legal journey today with AI-powered guidance and expert support.
          </p>
          <Link href="/problem-input" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Started Now
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-poppins font-bold text-white mb-4">JusticeLink</h4>
              <p className="text-sm">Making justice accessible to everyone.</p>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-white mb-4">Product</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">support@justicelink.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 JusticeLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

