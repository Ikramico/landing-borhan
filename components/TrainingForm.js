import { useState } from 'react'
import FormField from './FormField'
import SuccessMessage from './SuccessMessage'

const INITIAL = { name: '', email: '', phone: '' }

export default function TrainingForm() {
  const [formData, setFormData] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setFormData(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 mb-10">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-7">
        {/* Card heading */}
        <h2 className="text-base font-bold text-[#1a1a1a] text-center mb-1">
          Watch the Free Training
        </h2>
        <p className="text-xs text-gray-400 text-center mb-5">
          Enter your details below to join the FREE training
        </p>

        {status === 'success' ? (
          <SuccessMessage onReset={() => setStatus('idle')} />
        ) : (
          <form onSubmit={handleSubmit}>
            <FormField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              required
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+880"
            />

            {status === 'error' && (
              <p className="text-xs text-red-500 mb-3">Something went wrong. Please try again.</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#c8f135] hover:bg-[#b8e020] active:bg-[#a8d010] text-[#1a1a1a] font-bold text-sm py-3 rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed mb-4 touch-manipulation"
            >
              {status === 'loading' ? 'Submitting...' : 'Watch Now'}
            </button>

            {/* Trust badges */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <circle cx="7" cy="7" r="6.5" stroke="#c8f135" />
                  <path d="M4 7l2.5 2.5L10 4.5" stroke="#5a7a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Instant access
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <circle cx="7" cy="7" r="6.5" stroke="#c8f135" />
                  <path d="M4 7l2.5 2.5L10 4.5" stroke="#5a7a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                100% free
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}