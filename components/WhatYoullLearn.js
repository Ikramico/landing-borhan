const MODULES = [
	{
		color: "#f9a21f",
		emoji: "🛒",
		title: "Marketplace Master Class",
		items: [
			"Account Setup & Profile Optimization",
			"Client Hunting & Proposal Writing",
			"Order Management & Delivery System",
		],
	},
	{
		color: "#6ac537",
		emoji: "▶️",
		title: "YouTube Automation with AI",
		items: [
			"Niche Research & Channel Setup",
			"AI Content Creation",
			"Upload Strategy & SEO",
			"Monetization & Scaling",
		],
	},
	{
		color: "#19AAF8",
		emoji: "📈",
		title: "Online Business Growth Strategy",
		items: [
			"Product Research",
			"Online Sales Channel Setup",
			"Paid Ads & Sales Funnel",
			"Organic Growth Strategies",
		],
	},
];

export default function WhatYoullLearn() {
	return (
		<section
			className="border-t border-gray-100 py-8 sm:py-10 px-4 sm:px-6"
			style={{ background: "#f9f9f9" }}>
			<div className="max-w-md mx-auto">
				<h2 className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-5">
					What You'll Learn:
				</h2>

				<div className="flex flex-col gap-4 sm:gap-5 mb-7">
					{MODULES.map((mod) => (
						<div
							key={mod.title}
							className="rounded-xl p-4 border"
							style={{
								borderColor: mod.color + "40",
								background: mod.color + "08",
							}}>
							<div className="flex items-center gap-2 mb-2">
								<div
									className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
									style={{ background: mod.color + "20" }}>
									{mod.emoji}
								</div>
								<p className="text-sm font-bold text-[#1a1a1a]">{mod.title}</p>
							</div>
							<ul className="pl-2 flex flex-col gap-1">
								{mod.items.map((item) => (
									<li
										key={item}
										className="flex items-start gap-2 text-xs text-gray-500">
										<span
											style={{ color: mod.color, fontSize: 10, marginTop: 3 }}>
											●
										</span>
										{item}
									</li>
								))}
							</ul>
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
						<span className="font-semibold text-[#1a1a1a]">500+</span>{" "}
						professionals have joined this training
					</p>
				</div>
			</div>
		</section>
	);
}
