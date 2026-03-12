export default function HeroSection() {
	return (
		<div className="text-center py-8 sm:py-10 px-4 max-w-xl mx-auto">
			{/* Badge */}
			<div
				className="inline-flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1 rounded mb-5 uppercase tracking-wide"
				style={{ background: "#f9a21f" }}>
				<span>🎁</span> Free Training Available
			</div>

			{/* Headline */}
			<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-snug mb-5 px-2">
				Smart Digital Marketing with AI‑2026
			</h1>

			{/* Avatar + name */}
			<div className="flex items-center justify-center gap-2 mb-4">
				<div
					className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
					style={{ border: "2px solid #19AAF8" }}>
					<img
						src="/bb.jpeg"
						alt="Borhan Uddin"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="text-left">
					<p className="text-sm font-semibold text-[#1a1a1a] leading-tight">
						Borhan Uddin
					</p>
					<p className="text-xs text-gray-500">Mentor with 13+ years of experience</p>
				</div>
			</div>

			{/* Subtext */}
			<p className="text-sm text-gray-500 max-w-xs sm:max-w-sm mx-auto leading-relaxed">
				Join our FREE training and learn how to grow your digital business
				using the power of AI in 2026.
			</p>
		</div>
	);
}
