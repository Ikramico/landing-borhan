import { useState } from 'react'
import Field from './Field'
import SuccessMessage from './SuccessMessage'

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
      setFormData(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="animate-fade-up delay-200">
      <div className="relative rounded-2xl border border-[#1e1e1e] bg-[#111111] p-8 glow-orange">
        {/* Top accent line */}
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#FF6B35]/60 to-transparent" />

        <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-xl font-bold mb-1">
          Send us a message
        </h2>
        <p className="text-sm text-[#555] mb-7">Fill out the form and we'll get back to you shortly.</p>

        {status === 'success' ? (
          <SuccessMessage onReset={() => setStatus('idle')} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="First name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
              <Field label="Last name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
            </div>

            <Field label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
            <Field label="Phone number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
            <Field label="Company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc." />

            {/* Textarea */}
            <div>
              <label className="block text-xs font-medium text-[#666] mb-1.5 uppercase tracking-wide">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full bg-[#0d0d0d] border border-[#222] rounded-xl px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#FF6B35]/60 focus:ring-1 focus:ring-[#FF6B35]/20 resize-none transition-all"
              />
            </div>

            {/* Error */}
            {status === 'error' && (
              <p className="text-xs text-red-400 bg-red-400/10 rounded-lg px-3 py-2">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-xl bg-[#FF6B35] hover:bg-[#e55a26] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-center text-xs text-[#444]">No spam. Unsubscribe anytime.</p>
          </form>
        )}
      </div>
    </div>
  )
}
