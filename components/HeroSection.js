export default function HeroSection() {
  return (
    <div className="text-center py-8 sm:py-10 px-4 max-w-xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-[#c8f135] text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded mb-5 uppercase tracking-wide">
        <span>🎁</span> Free Training Available
      </div>

      {/* Headline */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-snug mb-5 px-2">
        Master Cold Email &amp; Land High-Paying Clients
      </h1>

      {/* Avatar + name */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Rakib Ahmed"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-[#1a1a1a] leading-tight">Rakib Ahmed</p>
          <p className="text-xs text-gray-500">Pro Mentor</p>
        </div>
      </div>

      {/* Subtext */}
      <p className="text-sm text-gray-500 max-w-xs sm:max-w-sm mx-auto leading-relaxed">
        Watch our FREE training and learn the exact system to book meetings with your dream clients.
      </p>
    </div>
  )
}