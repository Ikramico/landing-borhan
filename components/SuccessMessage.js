export default function SuccessMessage({ onReset }) {
	return (
		<div className="text-center py-10">
			<div
				className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
				style={{ background: "#6ac53720" }}>
				<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
					<path
						d="M4 11L9 16L18 6"
						stroke="#6ac537"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<h3 className="text-base font-bold text-[#1a1a1a] mb-1">
				You're registered!
			</h3>
			<p className="text-sm text-gray-500 mb-5">
				Check your email for the training link.
			</p>
			<button
				onClick={onReset}
				className="text-xs text-gray-400 hover:text-gray-600 underline">
				Register another
			</button>
		</div>
	);
}
