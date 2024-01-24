import { useRef, useState } from "react";
import "./App.css";
import HeroSection from "./components/hero-section/HeroSection";
import Header from "./components/header/Header";
import NewClientForm from "./components/new-client-form/NewClientForm";
import BenefitsSection from "./components/benefits-section/BenefitsSection";
import CustomerTestimonials from "./components/customer-testimonials/CustomerTestimonials";
import Footer from "./components/footer/Footer";
import AboutSection from "./components/about-section/AboutSection";
import ParrlaxImageScrollSection from "./components/parallax-image-scroll-section/ParrlaxImageScrollSection";

function App() {
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
			<Header isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			<HeroSection handleFormInputFocusScroll={() => handleInputRefFocusScroll()} />
			{/* ABOUT SECTION */}
			<AboutSection />
			<NewClientForm formInputRef={inputRef} />
			{/* PARALLAX IMG SECTION */}
			<ParrlaxImageScrollSection />
			{/* BENEFITS SECTION */}
			<BenefitsSection />
			{/* REVIEWS SECTION */}
			<CustomerTestimonials />
			<Footer handleInputRefFocusScroll={handleInputRefFocusScroll} />
		</>
	);
}

export default App;
