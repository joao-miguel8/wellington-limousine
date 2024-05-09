import { useRef, useState } from "react";
import "../App.css";
import HeroSection from "../components/hero-section/HeroSection";
import Header from "../components/header/Header";
import NewClientForm from "../components/new-client-form/NewClientForm";
import CustomerTestimonials from "../components/customer-testimonials/CustomerTestimonials";
import Footer from "../components/footer/Footer";
import ParallaxImageScrollSection from "../components/parallax-image-scroll-section/ParallaxImageScrollSection";
import Nav from "../components/Nav";
import FloatingGoToFormBtn from "../components/floating-go-to-form-btn/FloatingGoToFormBtn";
import { Link } from "react-router-dom";

function Homepage() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleInputRefFocusScroll = () => {
		if (inputRef.current) {
			inputRef.current.scrollIntoView();
			inputRef.current.focus();
		}
	};

	return (
		<>
			<Header setIsMenuClosed={setIsMenuClosed}>
				<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			</Header>
			<p className="mx-auto p-2 z-10 absolute top-[95px] left-0 right-0 font-semibold w-40 text-white text-14 text-center bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-[#D7B65C]">Located in Connecticut, NJ, and the NY tristate area</p>
			<HeroSection handleFormInputFocusScroll={() => handleInputRefFocusScroll()} />
			{/* ABOUT SECTION */}
			<div className="mx-auto max-w-[600px] mt-20">
				<h1 className="font-semibold text-26 text-center">
					Elevate Your Journey with Wellington Limousine's <span className="text-[#D7B65C]">Private Chauffeur Services</span>
				</h1>
				<p className="mt-4 text-18 text-center leading-8">
					Wellington Limousine's premier private chauffeur services is a one man operation and has been operating for nearly 8 years, we offer a level of personalized attention that sets us apart from our competitors in luxury and convenience. Offering various transportation services;
					<div className="flex flex-col gap-2 my-4">
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
					<p className="mt-6">
						Experience quality comfort and professionalism within every ride, from business trips to special occasions. Our unwavering commitment to excellence ensures a seamless and enjoyable experience. <span className="font-bold underline">Book your ride today</span> today and
						discover the difference of our private chauffeur services.
					</p>
				</p>
			</div>
			<NewClientForm formInputRef={inputRef} />
			{/* PARALLAX IMG SECTION */}
			<ParallaxImageScrollSection />
			{/* REVIEWS SECTION */}
			<CustomerTestimonials />
			<Footer handleInputRefFocusScroll={handleInputRefFocusScroll} />
			<FloatingGoToFormBtn handleInputRefFocusScroll={() => handleInputRefFocusScroll()} />
		</>
	);
}
export default Homepage;
