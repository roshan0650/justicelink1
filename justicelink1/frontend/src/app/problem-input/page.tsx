'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProblemInputPage() {
  const [issue, setIssue] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // TODO: Call AI analysis API
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <div className="card text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Issue Submitted Successfully!
            </h1>
            <p className="text-gray-600 mb-8">
              Our AI is analyzing your legal issue. You'll see the results shortly.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/legal-summary" className="btn-primary">
                View Analysis
              </Link>
              <Link href="/" className="btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4">
      <div className="container-max max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Describe Your Legal Issue
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your legal problem in simple words. Our AI will analyze it and provide guidance.
            </p>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Legal Issue
                </label>
                <textarea
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder="Example: I was fired from my job without proper notice. My employer didn't give me any reason or severance. What are my rights?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows={8}
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  {issue.length}/1000 characters
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="City, State"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category (Optional)
                  </label>
                  <select className="input-field">
                    <option value="">Select a category</option>
                    <option value="employment">Employment</option>
                    <option value="family">Family Law</option>
                    <option value="property">Property</option>
                    <option value="cyber">Cybercrime</option>
                    <option value="consumer">Consumer Rights</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>💡 Tip:</strong> Be as detailed as possible. Include dates, names (if comfortable), and any relevant documents or communications.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || !issue.trim()}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Analyzing your issue...
                  </span>
                ) : (
                  'Get AI Analysis'
                )}
              </button>
            </form>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI Analysis', desc: 'Instant classification of your legal issue' },
              { icon: '📋', title: 'Recommendations', desc: 'Actionable next steps and resources' },
              { icon: '⚖️', title: 'Lawyer Match', desc: 'Connect with relevant legal professionals' },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

