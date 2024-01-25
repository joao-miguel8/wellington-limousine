import { useRef, useState } from "react";
import "../App.css";
import HeroSection from "../components/hero-section/HeroSection";
import Header from "../components/header/Header";
import NewClientForm from "../components/new-client-form/NewClientForm";
import BenefitsSection from "../components/benefits-section/BenefitsSection";
import CustomerTestimonials from "../components/customer-testimonials/CustomerTestimonials";
import Footer from "../components/footer/Footer";
import AboutSection from "../components/about-section/AboutSection";
import ParallaxImageScrollSection from "../components/parallax-image-scroll-section/ParallaxImageScrollSection";
import Nav from "../components/Nav";
import FloatingGoToFormBtn from "../components/floating-go-to-form-btn/FloatingGoToFormBtn";

function Homepage() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);
	const inputRef = useRef<HTMLInputElement>();

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
			<HeroSection handleFormInputFocusScroll={() => handleInputRefFocusScroll()} />
			{/* ABOUT SECTION */}
			<AboutSection />
			<NewClientForm formInputRef={inputRef} />
			{/* PARALLAX IMG SECTION */}
			<ParallaxImageScrollSection />
			{/* BENEFITS SECTION */}
			<BenefitsSection />
			{/* REVIEWS SECTION */}
			<CustomerTestimonials />
			<Footer handleInputRefFocusScroll={handleInputRefFocusScroll} />
			<FloatingGoToFormBtn handleInputRefFocusScroll={() => handleInputRefFocusScroll()} />
		</>
	);
}
export default Homepage;
