'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LegalSummaryPage() {
  const [followUp, setFollowUp] = useState('')
  const [showChat, setShowChat] = useState(false)

  // Mock data - replace with actual API data
  const summary = {
    issueType: 'Employment Law - Wrongful Termination',
    summary: 'Based on your description, you appear to have been terminated without proper notice or severance, which may violate employment laws in your jurisdiction.',
    laws: [
      'Labor Standards Act - Section 5: Requires minimum notice period',
      'Employment Rights Act - Section 12: Protects against unfair dismissal',
      'Severance Pay Regulation - Mandates compensation for termination',
    ],
    nextSteps: [
      'Document all communications with your employer',
      'Gather evidence of your employment contract',
      'File a complaint with the Labor Department',
      'Consult with an employment lawyer',
    ],
    relatedLawyers: 3,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-2">
              AI Legal Analysis
            </h1>
            <p className="text-gray-600">Here's what we found about your legal issue</p>
          </div>

          {/* Issue Type */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="card mb-6 border-l-4 border-primary-500"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-2">
                  {summary.issueType}
                </h2>
                <p className="text-gray-600">{summary.summary}</p>
              </div>
              <div className="text-4xl">⚖️</div>
            </div>
          </motion.div>

          {/* Relevant Laws */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="card mb-6"
          >
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
              Relevant Laws & Regulations
            </h3>
            <div className="space-y-3">
              {summary.laws.map((law, idx) => (
                <div key={idx} className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-primary-600 font-bold">📜</span>
                  <p className="text-gray-700">{law}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommended Next Steps */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="card mb-6"
          >
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
              Recommended Next Steps
            </h3>
            <div className="space-y-3">
              {summary.nextSteps.map((step, idx) => (
                <div key={idx} className="flex gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-accent-600 font-bold">{idx + 1}.</span>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            <button className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">📥</div>
              <h4 className="font-poppins font-semibold mb-2">Download Report</h4>
              <p className="text-sm text-gray-600">Get a PDF summary</p>
            </button>
            <button
              onClick={() => setShowChat(!showChat)}
              className="card text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">💬</div>
              <h4 className="font-poppins font-semibold mb-2">Ask Follow-up</h4>
              <p className="text-sm text-gray-600">Chat with AI</p>
            </button>
            <Link href="/lawyer-map" className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⚖️</div>
              <h4 className="font-poppins font-semibold mb-2">Find Lawyers</h4>
              <p className="text-sm text-gray-600">{summary.relatedLawyers} available</p>
            </Link>
          </motion.div>

          {/* Chat Section */}
          {showChat && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card mb-6"
            >
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">
                Ask a Follow-up Question
              </h3>
              <div className="space-y-4">
                <textarea
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                  placeholder="Ask any follow-up questions about your legal issue..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  rows={4}
                />
                <button className="btn-primary">
                  Get AI Response
                </button>
              </div>
            </motion.div>
          )}

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="card"
          >
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
              Additional Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/resources" className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 transition">
                <h4 className="font-semibold text-gray-900 mb-2">📚 Legal Templates</h4>
                <p className="text-sm text-gray-600">Download complaint letters and forms</p>
              </Link>
              <Link href="/resources" className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 transition">
                <h4 className="font-semibold text-gray-900 mb-2">📖 Knowledge Base</h4>
                <p className="text-sm text-gray-600">Learn about your rights and laws</p>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

