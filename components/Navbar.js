export default function Navbar() {
	return (
		<nav
			
			className="w-full px-4 sm:px-6 py-1 bg-black opacity-70 flex items-center gap-3 sticky top-0">
			<img
				src="/Logo.png"
				alt="Learn Media BD Logo"
				className="w-20 h-20 object-cover"
				onError={(e) => {
					e.target.style.display = "none";
				}}
			/>
			{/* <span
				style={{
					color: "#19AAF8",
					fontFamily: "Georgia, serif",
					fontWeight: 700,
					fontSize: 15,
					letterSpacing: 0.5,
				}}>
				Learn Media BD
			</span> */}
		</nav>
	);
}
