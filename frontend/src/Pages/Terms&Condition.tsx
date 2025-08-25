import { useTheme } from '../contexts/ThemeContext';

import Header from "../Component/Header";
import FooterUnanimated from "../Component/FooterUnanimated";

const sectionTitle = (title: string) => (
	<h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: '#10b981', borderBottom: '2px solid #222', paddingBottom: '0.5rem' }}>{title}</h2>
);

const TermsCondition = () => {
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
					<h1 className="text-4xl font-extrabold mb-4 text-black">Terms of Service — <span style={{ color: '#10b981' }}>Bidyut Innovation</span></h1>
					<p className="text-sm text-gray-500 mb-8">Effective Date: August 25, 2025<br />Last Updated: August 25, 2025</p>
								<section className="mb-8">
									<p className="mb-2 text-gray-700 text-lg font-bold">Terms and Conditions</p>
									<p className="mb-2 text-gray-700 text-lg">Welcome to the payment gateway of Bidyut Innovation Pvt Ltd. By using this gateway to make payments, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before proceeding.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("Payment Terms")}
									<ul className="list-disc pl-6 text-gray-700">
										<li>Payments can be made via credit/debit cards, net banking, UPI, or other supported methods.</li>
										<li>All transactions are processed in INR (Indian Rupees).</li>
										<li>Payments must be made in full and are non-transferable unless otherwise stated.</li>
									</ul>
								</section>
								<section className="mb-8">
									{sectionTitle("Service Terms")}
									<ul className="list-disc pl-6 text-gray-700">
										<li>The payment gateway is intended only for authorized transactions related to products or services offered by Bidyut Innovation Pvt Ltd.</li>
										<li>Misuse or unauthorized use of this platform is strictly prohibited.</li>
									</ul>
								</section>
								<section className="mb-8">
									{sectionTitle("Transaction Security")}
									<p className="text-gray-700">All payment transactions are encrypted and processed securely. We do not store your payment details on our servers. Please ensure you are using a secure network when making payments.</p>
								</section>
					<section className="mb-8">
						{sectionTitle("1. Eligibility")}
						<p className="text-gray-700">To use our services, you must be at least 13 years old and capable of entering into a legal agreement.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("2. Acceptable Use")}
						<p className="mb-2 text-gray-700">You agree to use our services lawfully and respectfully. You must not:</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>Upload or transmit harmful code (malware, viruses)</li>
							<li>Attempt to hack, probe, or disrupt our servers</li>
							<li>Use our services to send spam or phishing content</li>
							<li>Misrepresent yourself or impersonate others</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("3. Intellectual Property")}
						<p className="text-gray-700">All content on the website — including text, logos, images, videos, code, and designs — is owned by Bidyut Innovation and protected under intellectual property laws. You may not copy, reuse, or redistribute any content without our written consent.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("4. User Accounts")}
						<p className="mb-2 text-gray-700">Some features may require you to register an account:</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>You are responsible for maintaining the confidentiality of your credentials.</li>
							<li>You are liable for all activity under your account.</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("5. Third-Party Services")}
						<p className="text-gray-700">Our website may contain links to external sites. We are not responsible for the content, policies, or actions of third-party services.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("6. Termination")}
						<p className="mb-2 text-gray-700">We may suspend or terminate your access if:</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>You breach any of these terms</li>
							<li>We detect misuse or suspicious activity</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("7. Limitation of Liability")}
						<ul className="list-disc pl-6 text-gray-700">
							<li>We are not liable for loss of data, revenue, or profit</li>
							<li>Any indirect, incidental, or consequential damages</li>
							<li>Use of our services is at your own risk.</li>
						</ul>
					</section>
					<section className="mb-8">
						{sectionTitle("8. Changes to Terms")}
						<p className="text-gray-700">We may revise these Terms periodically. You will be notified of significant changes via email or site announcements.</p>
					</section>
					<section className="mb-8">
						{sectionTitle("9. Contact")}
						<p className="text-gray-700">If you have any questions about these Terms, reach us at: <a href="mailto:legal@bidyutinno.com" className="text-green-600 underline">legal@bidyutinno.com</a></p>
					</section>
				</div>
			</main>
			<FooterUnanimated />
		</>
	);
};

export default TermsCondition;
