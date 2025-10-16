'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LawyerSignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    barCouncilId: '',
    specializations: [] as string[],
    location: '',
    bio: '',
    proBono: false,
  })

  const specializations = [
    'Labor Law',
    'Family Law',
    'Property Law',
    'Cyber Law',
    'Consumer Rights',
    'Criminal Law',
    'Civil Law',
    'Tax Law',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const toggleSpecialization = (spec: string) => {
    setFormData({
      ...formData,
      specializations: formData.specializations.includes(spec)
        ? formData.specializations.filter(s => s !== spec)
        : [...formData.specializations, spec],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // TODO: Submit form
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 py-12 px-4">
      <div className="container-max max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Join as a Lawyer
            </h1>
            <p className="text-lg text-gray-600">
              Help citizens access justice. Expand your practice with JusticeLink.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-all ${
                  s <= step ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
                    Basic Information
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Adv. John Doe"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bar Council ID / License Number
                    </label>
                    <input
                      type="text"
                      name="barCouncilId"
                      value={formData.barCouncilId}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="BC/2024/XXXXX"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Specializations */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
                    Your Specializations
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Select your areas of expertise (at least 1)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {specializations.map((spec) => (
                        <button
                          key={spec}
                          type="button"
                          onClick={() => toggleSpecialization(spec)}
                          className={`p-3 rounded-lg border-2 transition-all text-left ${
                            formData.specializations.includes(spec)
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className="font-semibold text-gray-900">{spec}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="City, State"
                      required
                    />
                  </div>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="proBono"
                      checked={formData.proBono}
                      onChange={handleChange}
                      className="rounded"
                    />
                    <span className="text-gray-700">
                      I'm open to offering pro bono services
                    </span>
                  </label>
                </motion.div>
              )}

              {/* Step 3: Profile */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
                    Profile Information
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Professional Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      placeholder="Tell clients about your experience and approach..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>📋 Next Steps:</strong> After registration, your credentials will be verified within 24-48 hours. You'll receive an email confirmation.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-outline flex-1"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  {step === 3 ? 'Complete Registration' : 'Next'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-primary-600 font-semibold hover:text-primary-700">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

