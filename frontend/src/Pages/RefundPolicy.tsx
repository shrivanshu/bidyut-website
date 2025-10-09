
import Header from "../Component/Header";
import FooterUnanimated from "../Component/FooterUnanimated";

const CookiePolicy = () => {
	return (
		<>
			<Header />
		<main className="min-h-screen bg-white flex flex-col items-center px-4 py-8 md:px-12 lg:px-32 mt-20">
				<div className="w-full max-w-3xl">
					<h1 className="text-4xl font-extrabold mb-4 text-black">Refund and Returns Policy</h1>
					<p className="mb-2 text-gray-700 text-lg">Thank you for shopping at Bidyut Innovation Pvt Ltd.</p>
					<h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: '#10b981', borderBottom: '2px solid #222', paddingBottom: '0.5rem' }}>Non-Tangible Irrevocable Goods (“Digital Products”)</h2>
					<p className="mb-2 text-gray-700">We do not issue refunds for non-tangible irrevocable goods (“digital products”) once the order is confirmed and the product is delivered.</p>
					<p className="mb-2 text-gray-700">We recommend contacting us for assistance if you experience any issues with receiving or downloading our products.</p>
					<h2 className="text-2xl font-bold mb-4 mt-10" style={{ color: '#10b981', borderBottom: '2px solid #222', paddingBottom: '0.5rem' }}>Contact Us for Any Issues</h2>
					<p className="mb-2 text-gray-700">If you have any questions about our Refund Policy or need assistance, please contact us at:</p>
					<ul className="list-none pl-0 text-gray-700">
						<li>Email: <a href="mailto:Info@bidyutrobotics.com" className="text-green-600 underline">Info@bidyutrobotics.com</a></li>
						<li>Phone: 9370782979</li>
						<li>Address: 901, Cliffton Corporate, Indore</li>
					</ul>
				</div>
			</main>
			<FooterUnanimated />
		</>
	);
};

export default CookiePolicy;
