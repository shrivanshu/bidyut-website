
import Header from "../Component/Header";
import FooterUnanimated from "../Component/FooterUnanimated";
import { useTheme } from '../contexts/ThemeContext';

const sectionTitle = (title: string) => (
	<h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: '#10b981', borderBottom: '2px solid #222', paddingBottom: '0.5rem' }}>{title}</h2>
);

const CookiePolicy = () => {
	const { isDark, toggleTheme } = useTheme();
	return (
		<>
			<Header />
			<div className="flex justify-end items-center w-full px-4 md:px-12 lg:px-32 mt-1">
				<button
					onClick={toggleTheme}
					className={`px-4 py-2 rounded font-semibold transition-colors duration-300 ${isDark ? 'bg-gray-900 text-green-400' : 'bg-green-100 text-gray-900'}`}
				>
					{isDark ? "Night" : "Day"}
				</button>
			</div>
			<main className="min-h-screen bg-white flex flex-col items-center px-4 py-8 md:px-12 lg:px-32 mt-10">
				<div className="w-full max-w-3xl">
					<h1 className="text-4xl font-extrabold mb-4 text-black">Cookie Policy — <span style={{ color: '#10b981' }}>Bidyut Innovation</span></h1>
					<p className="text-sm text-gray-500 mb-8">Last Updated: August 25, 2025</p>
					<section className="mb-8">
						<p className="mb-2 text-gray-700 text-lg">Bidyut Innovation uses cookies and similar technologies to ensure the best experience on our website. This policy explains how and why we use cookies.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("1. What Are Cookies?")}
						<p className="text-gray-700">Cookies are small files placed on your device that help websites remember actions and preferences over time. They’re used to improve functionality, performance, and personalization.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("2. Types of Cookies We Use")}
						<ul className="list-disc pl-6 text-gray-700 mb-2">
							<li className="mb-1"><span className="font-semibold text-black">Essential Cookies:</span> Required to operate the website. Without them, core features won’t function (e.g., login sessions, navigation).</li>
							<li className="mb-1"><span className="font-semibold text-black">Analytics Cookies:</span> Used to track user behavior and improve content, performance, and usability (e.g., Google Analytics).</li>
							<li className="mb-1"><span className="font-semibold text-black">Functional Cookies:</span> Allow us to remember user choices like language, theme, or region settings.</li>
							<li><span className="font-semibold text-black">Marketing Cookies:</span> Only used if you opt in, these help us show relevant ads or promotional content.</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("3. How to Manage Cookies")}
						<p className="mb-2 text-gray-700">You can control or delete cookies via your browser settings. Be aware that disabling certain cookies may reduce website functionality.</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>Chrome: Settings &gt; Privacy and Security</li>
							<li>Firefox: Preferences &gt; Privacy</li>
							<li>Safari: Preferences &gt; Privacy</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("4. Third-Party Cookies")}
						<p className="text-gray-700">We may allow trusted partners (like analytics tools) to set cookies on our site. Their policies govern their usage.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("5. Changes to This Policy")}
						<p className="text-gray-700">We may update this Cookie Policy from time to time. All changes will be reflected on this page.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("6. Contact")}
						<p className="text-gray-700">For questions about cookies or tracking technology: <a href="mailto:cookies@bidyutinno.com" className="text-green-600 underline">cookies@bidyutinno.com</a></p>
					</section>
				</div>
			</main>
			<FooterUnanimated />
		</>
	);
};

export default CookiePolicy;
