const FEATURES = [
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'From brief to launch in record time. We move as fast as you need.',
  },
  {
    icon: '🎯',
    title: 'Precision Execution',
    desc: 'Every pixel, every line of code crafted with attention to detail.',
  },
  {
    icon: '🔒',
    title: 'Your Data, Safe',
    desc: 'SOC2 compliant. All submissions encrypted and handled with care.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto pb-28">
      <div className="grid md:grid-cols-3 gap-4">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-[#1a1a1a] bg-[#0f0f0f] p-6 hover:border-[#2a2a2a] transition-colors group"
          >
            <span className="text-2xl mb-4 block">{f.icon}</span>
            <h3 style={{ fontFamily: "'Syne', sans-serif" }} className="font-bold text-sm mb-2 text-white">
              {f.title}
            </h3>
            <p className="text-xs text-[#555] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
