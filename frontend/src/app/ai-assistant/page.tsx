'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { aiAPI } from '@/lib/aiApi';
import Link from 'next/link';

export default function AIAssistant() {
  const { isAuthenticated } = useAuth();
  const [problemDescription, setProblemDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [advice, setAdvice] = useState('');
  const [laws, setLaws] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'summary' | 'advice' | 'laws'>('summary');

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">AI Legal Assistant</h1>
          <p className="text-gray-600 mb-6">Please login to access the AI legal assistant.</p>
          <Link href="/auth/login" className="btn-primary">
            Login
          </Link>
        </div>
      </div>
    );
  }

  const handleGenerateSummary = async () => {
    if (!problemDescription.trim()) {
      setError('Please describe your legal problem');
      return;
    }

    setLoading(true);
    setError('');
    setSummary('');

    const result = await aiAPI.generateLegalSummary(problemDescription);
    setLoading(false);

    if (result.success && result.summary) {
      setSummary(result.summary);
    } else {
      setError(result.error || 'Failed to generate summary');
    }
  };

  const handleGenerateAdvice = async () => {
    if (!problemDescription.trim()) {
      setError('Please describe your legal problem');
      return;
    }

    setLoading(true);
    setError('');
    setAdvice('');

    const result = await aiAPI.generateLegalAdvice(problemDescription);
    setLoading(false);

    if (result.success && result.advice) {
      setAdvice(result.advice);
    } else {
      setError(result.error || 'Failed to generate advice');
    }
  };

  const handleIdentifyLaws = async () => {
    if (!problemDescription.trim()) {
      setError('Please describe your legal problem');
      return;
    }

    setLoading(true);
    setError('');
    setLaws([]);

    const result = await aiAPI.identifyRelevantLaws(problemDescription);
    setLoading(false);

    if (result.success && result.laws) {
      setLaws(result.laws);
    } else {
      setError(result.error || 'Failed to identify laws');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🤖 AI Legal Assistant</h1>
          <p className="text-xl text-gray-600">Get instant legal insights powered by AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Describe Your Problem</h2>
              <textarea
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                placeholder="Describe your legal problem in detail..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <div className="mt-6 space-y-3">
                <button
                  onClick={handleGenerateSummary}
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {loading ? 'Generating...' : '📋 Generate Summary'}
                </button>
                <button
                  onClick={handleGenerateAdvice}
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {loading ? 'Generating...' : '💡 Get Advice'}
                </button>
                <button
                  onClick={handleIdentifyLaws}
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {loading ? 'Identifying...' : '⚖️ Identify Laws'}
                </button>
              </div>

              {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex gap-4 mb-6 border-b">
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`pb-2 font-semibold ${
                    activeTab === 'summary'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  📋 Summary
                </button>
                <button
                  onClick={() => setActiveTab('advice')}
                  className={`pb-2 font-semibold ${
                    activeTab === 'advice'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  💡 Advice
                </button>
                <button
                  onClick={() => setActiveTab('laws')}
                  className={`pb-2 font-semibold ${
                    activeTab === 'laws'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  ⚖️ Laws
                </button>
              </div>

              {activeTab === 'summary' && (
                <div className="prose prose-sm max-w-none">
                  {summary ? (
                    <div className="whitespace-pre-wrap text-gray-700">{summary}</div>
                  ) : (
                    <p className="text-gray-500">Generate a summary to see results here</p>
                  )}
                </div>
              )}

              {activeTab === 'advice' && (
                <div className="prose prose-sm max-w-none">
                  {advice ? (
                    <div className="whitespace-pre-wrap text-gray-700">{advice}</div>
                  ) : (
                    <p className="text-gray-500">Get advice to see results here</p>
                  )}
                </div>
              )}

              {activeTab === 'laws' && (
                <div>
                  {laws.length > 0 ? (
                    <ul className="space-y-2">
                      {laws.map((law, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <span className="text-blue-600 font-bold">⚖️</span>
                          <span className="text-gray-700">{law}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Identify laws to see results here</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-bold text-gray-900 mb-2">Describe</h3>
              <p className="text-gray-600">Describe your legal problem in detail</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">Analyze</h3>
              <p className="text-gray-600">AI analyzes your problem using legal expertise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold text-gray-900 mb-2">Get Insights</h3>
              <p className="text-gray-600">Receive actionable legal insights and advice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

