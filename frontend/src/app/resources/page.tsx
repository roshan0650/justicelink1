'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<'templates' | 'blog' | 'faq'>('templates')

  const templates = [
    {
      id: 1,
      title: 'Complaint Letter Template',
      category: 'Employment',
      description: 'Use this template to file a formal complaint with your employer',
      downloads: 1250,
    },
    {
      id: 2,
      title: 'Cease and Desist Letter',
      category: 'General',
      description: 'Legal template to stop harassment or unauthorized use',
      downloads: 890,
    },
    {
      id: 3,
      title: 'Rental Agreement',
      category: 'Property',
      description: 'Standard rental agreement template for landlords and tenants',
      downloads: 2100,
    },
    {
      id: 4,
      title: 'Employment Contract',
      category: 'Employment',
      description: 'Comprehensive employment contract template',
      downloads: 1560,
    },
  ]

  const blogs = [
    {
      id: 1,
      title: 'Know Your Rights: Employee Protection Laws',
      category: 'Employment',
      date: '2024-10-15',
      excerpt: 'Understanding your rights as an employee and what protections the law provides...',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Cybercrime Prevention: A Citizen\'s Guide',
      category: 'Cybercrime',
      date: '2024-10-14',
      excerpt: 'Learn how to protect yourself from online fraud and cybercrime...',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Property Rights: What You Need to Know',
      category: 'Property',
      date: '2024-10-13',
      excerpt: 'A comprehensive guide to property rights and dispute resolution...',
      readTime: '6 min read',
    },
  ]

  const faqs = [
    {
      question: 'How long does it take to get AI analysis?',
      answer: 'Our AI analyzes your issue instantly, usually within 30 seconds of submission.',
    },
    {
      question: 'Are the lawyers verified?',
      answer: 'Yes, all lawyers on our platform are verified with their bar council credentials.',
    },
    {
      question: 'Is my information confidential?',
      answer: 'Absolutely. We follow strict data protection and confidentiality protocols.',
    },
    {
      question: 'Can I get pro bono legal help?',
      answer: 'Yes, many lawyers on our platform offer pro bono services. Filter by "Pro Bono Available".',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Resources & Learning Hub
            </h1>
            <p className="text-lg text-gray-600">
              Free legal templates, educational content, and FAQs
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-200">
            {(['templates', 'blog', 'faq'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition-all border-b-2 ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'templates' && '📋 Templates'}
                {tab === 'blog' && '📖 Blog'}
                {tab === 'faq' && '❓ FAQ'}
              </button>
            ))}
          </div>

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {templates.map((template) => (
                <div key={template.id} className="card">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-poppins font-bold text-gray-900 flex-1">
                      {template.title}
                    </h3>
                    <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      📥 {template.downloads} downloads
                    </span>
                    <button className="btn-primary text-sm">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Blog Tab */}
          {activeTab === 'blog' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {blogs.map((blog) => (
                <div key={blog.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                    </div>
                    <span className="text-xs bg-accent-100 text-accent-700 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                      {blog.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {faqs.map((faq, idx) => (
                <details key={idx} className="card group cursor-pointer">
                  <summary className="font-poppins font-bold text-gray-900 flex items-center justify-between">
                    {faq.question}
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                </details>
              ))}
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg p-8 text-center"
          >
            <h2 className="text-3xl font-poppins font-bold mb-4">
              Need More Help?
            </h2>
            <p className="mb-6 text-lg opacity-90">
              Connect with a verified lawyer for personalized legal guidance
            </p>
            <Link href="/lawyer-map" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Find a Lawyer
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

