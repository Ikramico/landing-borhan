import Head from "next/head";
import { useState, useEffect } from "react";

function Orb({ style }) {
	return <div className="orb" style={style} />;
}

export default function UnderConstruction() {
	const [dots, setDots] = useState("");
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((d) => (d.length >= 3 ? "" : d + "."));
		}, 500);
		return () => clearInterval(interval);
	}, []);

	const handleNotify = (e) => {
		e.preventDefault();
		if (email) setSubmitted(true);
	};

	return (
		<>
			<Head>
				<title>Coming Soon — Learn Media BD</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: #0a0a0a;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem 1.5rem;
          overflow: hidden;
        }
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(25,170,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(25,170,248,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }
        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          animation: drift 8s ease-in-out infinite alternate;
        }
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, -20px) scale(1.08); }
        }
        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 560px;
          width: 100%;
        }
        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 3rem;
        }
        .logo img {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          object-fit: cover;
        }
        .logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #19AAF8;
          letter-spacing: 0.3px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(249,162,31,0.12);
          border: 1px solid rgba(249,162,31,0.3);
          color: #f9a21f;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.6s ease both;
        }
        .gear { animation: spin 4s linear infinite; display: inline-block; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 8vw, 4rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -1px;
          margin-bottom: 1.25rem;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .headline .blue  { color: #19AAF8; }
        .headline .green { color: #6ac537; }
        .subtext {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          animation: fadeUp 0.6s 0.2s ease both;
        }
        .progress-wrap {
          margin-bottom: 2.5rem;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #444;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .progress-label span:last-child { color: #19AAF8; font-weight: 600; }
        .progress-track {
          width: 100%;
          height: 6px;
          background: #1a1a1a;
          border-radius: 100px;
          overflow: hidden;
          border: 1px solid #222;
        }
        .progress-fill {
          height: 100%;
          width: 68%;
          border-radius: 100px;
          background: linear-gradient(90deg, #19AAF8, #6ac537);
          position: relative;
          animation: fillBar 1.8s 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fillBar {
          from { width: 0; }
          to   { width: 68%; }
        }
        .progress-fill::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 20px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4));
          border-radius: 100px;
          animation: shimmer 1.5s 2.6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .notify-form {
          display: flex;
          gap: 8px;
          max-width: 400px;
          margin: 0 auto 2rem;
          animation: fadeUp 0.6s 0.4s ease both;
        }
        .notify-input {
          flex: 1;
          background: #111;
          border: 1px solid #222;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 13px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        .notify-input::placeholder { color: #333; }
        .notify-input:focus { border-color: #19AAF8; }
        .notify-btn {
          background: #19AAF8;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 12px 20px;
          font-size: 13px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
        }
        .notify-btn:hover { background: #0e9de8; transform: translateY(-1px); }
        .notify-btn:active { transform: translateY(0); }
        .success-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          color: #6ac537;
          animation: fadeUp 0.4s ease both;
          margin-bottom: 2rem;
        }
        .features {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp 0.6s 0.5s ease both;
        }
        .feature-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #111;
          border: 1px solid #1e1e1e;
          border-radius: 100px;
          padding: 7px 14px;
          font-size: 12px;
          color: #555;
          transition: border-color 0.2s, color 0.2s;
        }
        .feature-pill:hover { border-color: #333; color: #888; }
        .feature-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .divider {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #19AAF8, #6ac537);
          border-radius: 2px;
          margin: 2.5rem auto 1.5rem;
          animation: fadeUp 0.6s 0.5s ease both;
        }
        .footer-note {
          font-size: 11px;
          color: #333;
          animation: fadeUp 0.6s 0.6s ease both;
          letter-spacing: 0.3px;
        }
        .footer-note a { color: #19AAF8; text-decoration: none; }
        .footer-note a:hover { text-decoration: underline; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .notify-form { flex-direction: column; }
          .notify-btn { width: 100%; }
        }
      `}</style>

			<div className="grid-bg" />
			<Orb
				style={{
					width: 400,
					height: 400,
					background: "rgba(25,170,248,0.08)",
					top: "-100px",
					right: "-100px",
				}}
			/>
			<Orb
				style={{
					width: 300,
					height: 300,
					background: "rgba(106,197,55,0.06)",
					bottom: "-80px",
					left: "-80px",
					animationDelay: "2s",
					animationDirection: "alternate-reverse",
				}}
			/>
			<Orb
				style={{
					width: 200,
					height: 200,
					background: "rgba(249,162,31,0.05)",
					top: "40%",
					left: "10%",
					animationDelay: "1s",
				}}
			/>

			<div className="page">
				<div className="content">
					<div className="logo">
						<img src="/Logo.png" alt="Learn Media BD" />
						<span className="logo-text">Learn Media BD</span>
					</div>

					<div className="badge">
						<span className="gear">⚙️</span>
						Under Construction
					</div>

					<h1 className="headline">
						Something <span className="blue">Big</span> is
						<br />
						<span className="green">Coming Soon</span>
						{dots}
					</h1>

					<p className="subtext">
						We're crafting an incredible digital experience.
						<br />
						Our new website is being built with precision — drop your email
						<br />
						and be the first to know when we launch.
					</p>

					<div className="progress-wrap">
						<div className="progress-label">
							<span>Build Progress</span>
							<span>68% Complete</span>
						</div>
						<div className="progress-track">
							<div className="progress-fill" />
						</div>
					</div>

					{!submitted ? (
						<form className="notify-form" onSubmit={handleNotify}>
							<input
								className="notify-input"
								type="email"
								placeholder="your@email.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<button className="notify-btn" type="submit">
								Notify Me
							</button>
						</form>
					) : (
						<div className="success-note">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<circle cx="8" cy="8" r="7.5" stroke="#6ac537" />
								<path
									d="M5 8l2.5 2.5L11 5"
									stroke="#6ac537"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							You're on the list! We'll notify you at launch.
						</div>
					)}

					<div className="features">
						{[
							{ label: "Marketplace Mastery", color: "#f9a21f" },
							{ label: "YouTube with AI", color: "#6ac537" },
							{ label: "Growth Strategy", color: "#19AAF8" },
						].map((f) => (
							<div className="feature-pill" key={f.label}>
								<span className="feature-dot" style={{ background: f.color }} />
								{f.label}
							</div>
						))}
					</div>

					<div className="divider" />

					<p className="footer-note">
						Already registered? <a href="/webinar">Access the Free Webinar →</a>
					</p>
				</div>
			</div>
		</>
	);
}
