import { useRef, useState } from "react";
import "../App.css";
import HeroSection from "../components/hero-section/HeroSection";
import Header from "../components/header/Header";
import NewClientForm from "../components/new-client-form/NewClientForm";
import CustomerTestimonials from "../components/customer-testimonials/CustomerTestimonials";
import Footer from "../components/footer/Footer";
import AboutSection from "../components/about-section/AboutSection";
import ParallaxImageScrollSection from "../components/parallax-image-scroll-section/ParallaxImageScrollSection";
import Nav from "../components/Nav";
import FloatingGoToFormBtn from "../components/floating-go-to-form-btn/FloatingGoToFormBtn";

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
			<AboutSection />
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
