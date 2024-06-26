import { useState } from "react";
import "../App.css";
import HeroSection from "../components/hero-section/HeroSection";
import Header from "../components/header/Header";
import CustomerTestimonials from "../components/customer-testimonials/CustomerTestimonials";
import Footer from "../components/footer/Footer";
import ParallaxImageScrollSection from "../components/parallax-image-scroll-section/ParallaxImageScrollSection";
import Nav from "../components/Nav";
import FloatingGoToFormBtn from "../components/floating-go-to-form-btn/FloatingGoToFormBtn";
import { Link } from "react-router-dom";

function Homepage() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);

	return (
		<>
			<Header setIsMenuClosed={setIsMenuClosed}>
				<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			</Header>
			<p className="mx-auto p-2 z-10 absolute top-[95px] left-0 right-0 font-semibold w-40 text-white text-14 text-center bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-[#D7B65C]">Located in the NY tri-state area and Long Island</p>
			<HeroSection />
			{/* ABOUT SECTION */}
			<div className="mx-auto max-w-[600px] my-20">
				<h1 className="mx-2 font-semibold text-26 text-center">
					Elevate Your Journey with Wellington Limousine's <span className="text-[#D7B65C]">Private Chauffeur Services</span>
				</h1>
				<p className="mt-4 mx-4 text-18 text-center leading-8">
					Wellington Limousine's premier private chauffeur services is a one man operation and has been operating for nearly 8 years, we offer a level of personalized attention that sets us apart from our competitors in luxury and convenience. Offering various transportation services
				</p>
				<div className="my-4 mx-6 flex flex-col items-center gap-4 text-center">
					<Link className="text-[#c39f3b] font-semibold hover:text-[#a88421]" to={"/services"}>
						Private Chauffeur
					</Link>
					<Link className="text-[#c39f3b] font-semibold hover:text-[#a88421]" to={"/services"}>
						Personal Driver
					</Link>
					<Link className="text-[#c39f3b] font-semibold hover:text-[#a88421]" to={"/services"}>
						Airport Transfers,
					</Link>
					<Link className="text-[#c39f3b] font-semibold hover:text-[#a88421]" to={"/services"}>
						Events & Weddings
					</Link>
					<Link className="text-[#c39f3b] font-semibold hover:text-[#a88421]" to={"/services"}>
						Airport Transportation Services and much more.
					</Link>
				</div>
				<p className="mt-6 mx-2 text-18 text-center leading-8">
					Experience quality comfort and professionalism within every ride, from business trips to special occasions. Our unwavering commitment to excellence ensures a seamless and enjoyable experience.
					<Link to="/booking" className="font-bold underline">
						Book your ride today
					</Link>
					<span> discover the difference of our private chauffeur services.</span>
				</p>
			</div>
			{/* PARALLAX IMG SECTION */}
			<ParallaxImageScrollSection />
			{/* REVIEWS SECTION */}
			<CustomerTestimonials />
			<Footer />
			<FloatingGoToFormBtn />
		</>
	);
}
export default Homepage;
