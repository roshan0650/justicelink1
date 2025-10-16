'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LawyerMapPage() {
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(null)
  const [filterSpecialization, setFilterSpecialization] = useState('all')

  // Mock lawyer data
  const lawyers = [
    {
      id: 1,
      name: 'Adv. Rajesh Iyer',
      specialization: 'Labor Law',
      location: 'Chennai',
      rating: 4.8,
      reviews: 124,
      availability: 'Online',
      proBono: true,
      image: '👨‍⚖️',
    },
    {
      id: 2,
      name: 'Adv. Aditi Singh',
      specialization: 'Family Law',
      location: 'Delhi',
      rating: 4.9,
      reviews: 156,
      availability: 'Offline',
      proBono: false,
      image: '👩‍⚖️',
    },
    {
      id: 3,
      name: 'Adv. Faizan Ali',
      specialization: 'Cyber Law',
      location: 'Hyderabad',
      rating: 4.7,
      reviews: 98,
      availability: 'Online',
      proBono: true,
      image: '👨‍⚖️',
    },
  ]

  const filteredLawyers = filterSpecialization === 'all'
    ? lawyers
    : lawyers.filter(l => l.specialization.toLowerCase().includes(filterSpecialization.toLowerCase()))

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
              Find Local Legal Help
            </h1>
            <p className="text-lg text-gray-600">
              Connect with verified lawyers in your area
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="card h-96 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600">
                    Google Maps integration coming soon
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Shows nearby lawyers and legal aid centers
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="card h-fit"
            >
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Specialization
                  </label>
                  <select
                    value={filterSpecialization}
                    onChange={(e) => setFilterSpecialization(e.target.value)}
                    className="input-field"
                  >
                    <option value="all">All Specializations</option>
                    <option value="labor">Labor Law</option>
                    <option value="family">Family Law</option>
                    <option value="cyber">Cyber Law</option>
                    <option value="property">Property Law</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Availability
                  </label>
                  <select className="input-field">
                    <option value="all">All</option>
                    <option value="online">Online Only</option>
                    <option value="offline">In-Person Only</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Pro Bono Available</span>
                  </label>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lawyers List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
              Available Lawyers ({filteredLawyers.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLawyers.map((lawyer) => (
                <motion.div
                  key={lawyer.id}
                  whileHover={{ y: -5 }}
                  className="card cursor-pointer"
                  onClick={() => setSelectedLawyer(lawyer.id)}
                >
                  <div className="text-5xl mb-4">{lawyer.image}</div>
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
                    {lawyer.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {lawyer.specialization}
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>📍 {lawyer.location}</p>
                    <p>⭐ {lawyer.rating} ({lawyer.reviews} reviews)</p>
                    <p>💻 {lawyer.availability}</p>
                    {lawyer.proBono && (
                      <p className="text-accent-600 font-semibold">✓ Pro Bono Available</p>
                    )}
                  </div>
                  <button className="w-full btn-primary text-sm">
                    Contact Lawyer
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lawyer Detail Modal */}
          {selectedLawyer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedLawyer(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="card max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedLawyer(null)}
                  className="float-right text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <div className="text-5xl mb-4">
                  {lawyers.find(l => l.id === selectedLawyer)?.image}
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2">
                  {lawyers.find(l => l.id === selectedLawyer)?.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {lawyers.find(l => l.id === selectedLawyer)?.specialization}
                </p>
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600">
                    <strong>Experience:</strong> 10+ years
                  </p>
                  <p className="text-gray-600">
                    <strong>Languages:</strong> English, Hindi
                  </p>
                  <p className="text-gray-600">
                    <strong>Consultation Fee:</strong> ₹500/hour
                  </p>
                </div>
                <button className="w-full btn-primary mb-2">
                  Book Consultation
                </button>
                <button className="w-full btn-outline">
                  Send Message
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

