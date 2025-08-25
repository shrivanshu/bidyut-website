

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
								<h1 className="text-4xl font-extrabold mb-4 text-black">Privacy Policy — <span style={{ color: '#10b981' }}>Bidyut Innovation Pvt Ltd</span></h1>
								<p className="text-sm text-gray-500 mb-8">Effective Date: August 25, 2025<br />Last Updated: August 25, 2025</p>
								<section className="mb-8">
									<p className="mb-2 text-gray-700 text-lg">
										This Privacy Policy (the “Policy”) governs the manner in which Bidyut Innovation Pvt Ltd (“we,” “us,” “our,” or the “Platform”) collects, uses, maintains, and discloses information of its users. The Policy also describes the practices that we apply to such user information, your privacy rights, and choices regarding your information. This Policy applies to all users of the Platform (referred to as “Users,” “You,” “Your”).
									</p>
									<p className="mb-2 text-gray-700 text-lg">
										By accessing and using the Platform, providing your personal information, or otherwise signifying your agreement when the option is presented, you consent to the collection, use, and disclosure of information as described in this Policy and our Terms of Use. If you do not agree with any provisions of this Policy or the Terms of Use, please do not access or use the Platform and discontinue communication with us immediately.
									</p>
									<p className="mb-2 text-gray-700 text-lg">
										If any information you provide or upload violates the terms of this Policy or the Terms of Use, we may delete such information upon informing you of the same and revoke your access without incurring liability. Please read this Policy carefully prior to accessing our Platform and using any of the services or products offered. For questions, contact us at <a href="mailto:rahul@bidyutinnovation.com" className="text-green-600 underline">rahul@bidyutinnovation.com</a>.
									</p>
								</section>
								<section className="mb-8">
									{sectionTitle("1. Personal Information")}
									<p className="mb-2 text-gray-700">“Personal Information” includes details that identify a User such as:</p>
									<ul className="list-disc pl-6 mb-2 text-gray-700">
										<li>Name</li>
										<li>Email address</li>
										<li>Phone number</li>
										<li>Address</li>
										<li>Photograph</li>
										<li>Gender, age, and location</li>
										<li>Any other details voluntarily shared at the time of registration or later.</li>
									</ul>
									<p className="mb-2 text-gray-700">“Sensitive Personal Information” includes:</p>
									<ul className="list-disc pl-6 mb-2 text-gray-700">
										<li>Passwords and financial data (except truncated credit/debit card details).</li>
										<li>Government-issued identifiers (e.g., Aadhaar, driver’s license, passport).</li>
										<li>Health data.</li>
										<li>Information about race, ethnicity, religion, sexual identity, or political beliefs.</li>
										<li>Other data classified as ‘sensitive personal data’ under applicable laws.</li>
									</ul>
									<p className="mb-2 text-gray-700">The term ‘Personal Information’ may encompass ‘Sensitive Personal Information’ when used in this Policy.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("2. Information We Collect")}
									<ul className="list-disc pl-6 mb-2 text-gray-700">
										<li><span className="font-semibold">a. Personal Information:</span> We collect personal information that you voluntarily provide during registration on the Platform and when using specific services or features.</li>
										<li><span className="font-semibold">b. Non-Personal Information:</span> When you interact with the Platform, we may collect non-personal data, including browser type, language preference, device details, operating system, and Internet Service Provider (ISP).</li>
										<li><span className="font-semibold">c. Cookies:</span> We use cookies to enhance the User experience. You can configure your browser to reject cookies, but some Platform features may not function properly.</li>
									</ul>
								</section>
								<section className="mb-8">
									{sectionTitle("3. How We Use Your Information")}
									<ul className="list-disc pl-6 text-gray-700">
										<li>Platform Access and Service Delivery: To process registrations, manage User accounts, and provide services.</li>
										<li>Improving Platform Safety and Functionality: To prevent fraud, detect technical issues, and enhance usability.</li>
										<li>Marketing and Communication: To send updates about services, respond to queries, or share promotional content.</li>
									</ul>
									<p className="mt-2 text-gray-700">We do not use your personal information for automated decision-making without explicit consent.</p>
									<p className="mt-2 text-gray-700">For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("4. Sharing of Information")}
									<p className="mb-2 text-gray-700">We do not sell or trade your personal information. However, we may share aggregated, non-identifiable information with:</p>
									<ul className="list-disc pl-6 text-gray-700">
										<li>Business partners for analytical purposes.</li>
										<li>Service providers assisting in delivering Platform features.</li>
									</ul>
								</section>
								<section className="mb-8">
									{sectionTitle("5. Your Choices")}
									<ul className="list-disc pl-6 text-gray-700">
										<li>Update or Delete Information: You may modify or delete your data at any time using the Platform’s account settings.</li>
										<li>Control Communication Preferences: Opt-out of promotional emails by contacting us at <a href="mailto:rahul@bidyutinnovation.com" className="text-green-600 underline">rahul@bidyutinnovation.com</a>.</li>
									</ul>
								</section>
								<section className="mb-8">
									{sectionTitle("6. Your Rights")}
									<ul className="list-disc pl-6 text-gray-700">
										<li>Access: Request access to the personal data we store.</li>
										<li>Correction: Rectify inaccuracies in your data.</li>
										<li>Erasure: Request deletion of data (subject to legal exceptions).</li>
										<li>Restriction: Limit the processing of your data in certain situations.</li>
									</ul>
									<p className="mt-2 text-gray-700">For any of these rights, contact <a href="mailto:rahul@bidyutinnovation.com" className="text-green-600 underline">rahul@bidyutinnovation.com</a>.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("7. Data Protection")}
									<p className="text-gray-700">We implement robust security measures to prevent unauthorized access, alteration, or destruction of your data. While we strive to protect your data, no transmission method is completely secure.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("8. Cross-Border Data Transfers")}
									<p className="text-gray-700">Your information is stored and processed on secure servers in India (e.g., Amazon Web Services). By using our services, you consent to this transfer, including storage in countries with differing privacy laws.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("9. Retention Policy")}
									<p className="text-gray-700">We retain your data as long as required for providing services, complying with legal obligations, and business continuity purposes.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("10. Third-Party Websites")}
									<p className="text-gray-700">The Platform may link to third-party websites. We are not responsible for the privacy practices of these external sites. Review their policies before sharing information.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("11. Changes to this Privacy Policy")}
									<p className="text-gray-700">We reserve the right to amend this Policy at any time. Changes will be updated on the Platform, and the effective date will reflect the latest revision.</p>
								</section>
								<section className="mb-8">
									{sectionTitle("12. Grievances")}
									<p className="text-gray-700">For grievances, queries, or rights-related issues, contact:</p>
									<ul className="list-none pl-0 text-gray-700">
										<li><span className="font-semibold">Rahul Shah</span></li>
										<li>Bidyut Innovation Pvt Ltd</li>
										<li>901, Cliffton Corporate</li>
										<li>Phone: 9370782979</li>
										<li>Email: <a href="mailto:rahul@bidyutinnovation.com" className="text-green-600 underline">rahul@bidyutinnovation.com</a></li>
									</ul>
								</section>
				</div>
			</main>
			<FooterUnanimated />
		</>
	);
};

export default PrivacyPolicy;
