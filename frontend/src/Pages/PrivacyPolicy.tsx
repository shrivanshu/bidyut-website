

import Header from "../Component/Header";
import FooterUnanimated from "../Component/FooterUnanimated";
import { useTheme } from '../contexts/ThemeContext';

const sectionTitle = (title: string) => (
	<h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: '#10b981', borderBottom: '2px solid #222', paddingBottom: '0.5rem' }}>{title}</h2>
);

const PrivacyPolicy = () => {
	const { isDark, toggleTheme } = useTheme();
	return (
		<>
			<Header />
			<div className="flex justify-end items-center w-full px-4 md:px-12 lg:px-32 mt-2">
				<button
					onClick={toggleTheme}
					className={`px-4 py-2 rounded font-semibold transition-colors duration-300 ${isDark ? 'bg-gray-900 text-green-400' : 'bg-green-100 text-gray-900'}`}
				>
					{isDark ? "Night" : "Day"}
				</button>
			</div>
			<main className="min-h-screen bg-white flex flex-col items-center px-4 py-8 md:px-12 lg:px-32 mt-16">
				<div className="w-full max-w-3xl">
					<h1 className="text-4xl font-extrabold mb-4 text-black">Privacy Policy — <span style={{ color: '#10b981' }}>Bidyut Innovation</span></h1>
					<p className="text-sm text-gray-500 mb-8">Effective Date: August 25, 2025<br />Last Updated: August 25, 2025</p>
					<section className="mb-8">
						<p className="mb-2 text-gray-700 text-lg">
							Bidyut Innovation is committed to protecting the privacy of its users, customers, and partners. This Privacy Policy explains what personal information we collect, why we collect it, how it’s used, and how you can access, update, or delete your data.
						</p>
					</section>
					<section className="mb-8">
						{sectionTitle("1. Information We Collect")}
						<p className="mb-2 text-gray-700">We collect various types of information to provide and improve our services, including:</p>
						<ul className="list-disc pl-6 mb-2 text-gray-700">
							<li className="mb-1"><span className="font-semibold text-black">Personal Information:</span> Full Name, Email Address, Phone Number, Company Name (if applicable), and any other details you voluntarily provide via forms or communication.</li>
							<li className="mb-1"><span className="font-semibold text-black">Technical and Usage Data:</span> IP address, browser type and version, operating system and device type, pages visited and time spent, referring website or source.</li>
							<li><span className="font-semibold text-black">Cookies and Tracking Technologies:</span> Cookies help us personalize your experience, analyze usage, and enhance performance.</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("2. How We Use Your Information")}
						<ul className="list-disc pl-6 text-gray-700">
							<li>Provide and improve our robotics and automation services</li>
							<li>Communicate with you about updates, new features, or marketing (if opted in)</li>
							<li>Respond to your inquiries and support requests</li>
							<li>Analyze website usage for better performance</li>
							<li>Fulfill legal or regulatory obligations</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("3. How We Share Your Data")}
						<ul className="list-disc pl-6 text-gray-700">
							<li>We do not sell or rent your data.</li>
							<li>Your information may be shared with third-party service providers (hosting, analytics, email delivery).</li>
							<li>Governmental or regulatory authorities if legally required.</li>
							<li>In the case of a business merger or acquisition.</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("4. Data Retention")}
						<p className="text-gray-700">We retain your personal data as long as needed for our services, legal compliance, or user support.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("5. Your Rights")}
						<p className="mb-2 text-gray-700">Depending on your region (e.g., GDPR, CCPA), you may:</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>Access the personal data we hold about you</li>
							<li>Request correction or deletion of your data</li>
							<li>Withdraw consent for processing</li>
							<li>File a complaint with a data protection authority</li>
						</ul>
						<p className="mt-2 text-gray-700">Contact for privacy requests: <a href="mailto:privacy@bidyutinno.com" className="text-green-600 underline">privacy@bidyutinno.com</a></p>
					</section>
					<section className="mb-8">
						{sectionTitle("6. Security Measures")}
						<p className="text-gray-700">We implement industry-standard encryption, access control, and security protocols to safeguard your data.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("7. Children's Privacy")}
						<p className="text-gray-700">Our website and services are not intended for users under the age of 13. We do not knowingly collect data from children.</p>
					</section>
				</div>
			</main>
			<FooterUnanimated />
		</>
	);
};

export default PrivacyPolicy;
