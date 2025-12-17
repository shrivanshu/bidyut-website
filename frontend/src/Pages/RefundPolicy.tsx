
import Header from "../Component/Header";
import FooterUnanimated from "../Component/FooterUnanimated";
import { SEO } from '../hooks/useSEO';

const CookiePolicy = () => {
    return (
		<>
			<SEO
				title="Refund Policy | Bidyut Innovation"
				description="Refund and Returns Policy for Bidyut Innovation. Learn about our policy for digital products and robotics education services."
				canonical="https://bidyutinnovation.com/RefundPolicy"
			/>
			<Header />
			{/* Page wrapper adds space for fixed header and supports light/dark theme */}
			<div className="min-h-screen bg-white dark:bg-black pt-24 md:pt-28">
				<div className="container mx-auto px-4 py-8">
					<div className="w-full max-w-3xl mx-auto px-4 md:px-0">
						<h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Refund and Returns Policy</h1>
						<p className="mb-2 text-gray-700 dark:text-gray-300 text-lg">Thank you for shopping at Bidyut Innovation Pvt Ltd.</p>
						<h2 className="text-2xl font-bold mb-4 mt-10 text-[#10b981] border-b-2 border-gray-300 dark:border-gray-700 pb-2">Non-Tangible Irrevocable Goods (“Digital Products”)</h2>
						<p className="mb-2 text-gray-700 dark:text-gray-300">We do not issue refunds for non-tangible irrevocable goods (“digital products”) once the order is confirmed and the product is delivered.</p>
						<p className="mb-2 text-gray-700 dark:text-gray-300">We recommend contacting us for assistance if you experience any issues with receiving or downloading our products.</p>
						<h2 className="text-2xl font-bold mb-4 mt-10 text-[#10b981] border-b-2 border-gray-300 dark:border-gray-700 pb-2">Contact Us for Any Issues</h2>
						<p className="mb-2 text-gray-700 dark:text-gray-300">If you have any questions about our Refund Policy or need assistance, please contact us at:</p>
						<ul className="list-none pl-0 text-gray-700 dark:text-gray-300">
							<li>Email: <a href="mailto:Info@bidyutrobotics.com" className="text-green-600 dark:text-green-400 underline">Info@bidyutrobotics.com</a></li>
							<li>Phone: 9370782979</li>
							<li>Address: 901, Cliffton Corporate, Indore</li>
						</ul>
					</div>
				</div>
			</div>
			<FooterUnanimated />
		</>
	);
};

export default CookiePolicy;
