const ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3" width="16" height="12" rx="2" stroke="#1a1a1a" strokeWidth="1.5"/>
        <path d="M1 7h16" stroke="#1a1a1a" strokeWidth="1.5"/>
        <path d="M6 3V1M12 3V1" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'The 5-Step Cold Email Framework',
    desc: 'Learn the exact system that gets 40%+ reply rates',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7.5" stroke="#1a1a1a" strokeWidth="1.5"/>
        <path d="M6 9a3 3 0 106 0 3 3 0 00-6 0z" stroke="#1a1a1a" strokeWidth="1.5"/>
        <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Find & Research Ideal Clients',
    desc: 'Discover how to identify and reach decision-makers',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 4h14v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="#1a1a1a" strokeWidth="1.5"/>
        <path d="M2 4l7 6 7-6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Real Templates That Work',
    desc: 'Get proven templates that booked 100+ meetings',
  },
]

export default function WhatYoullLearn() {
  return (
    <section className="bg-[#f9f9f9] border-t border-gray-100 py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-5">What You'll Learn:</h2>

        <div className="flex flex-col gap-4 sm:gap-5 mb-7">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#1a1a1a] leading-tight">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex -space-x-2 flex-shrink-0">
            {[11, 12, 13, 14].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/28?img=${i}`}
                alt="user"
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-[#1a1a1a]">500+</span> professionals have joined this training
          </p>
        </div>
      </div>
    </section>
  )
}