import { useState } from "react";
import "./App.css";
import parallaxImgDesktop from "./assets/client-in-backseat.jpg";

import HeroSection from "./components/hero-section/HeroSection";
import Header from "./components/header/Header";
import NewClientForm from "./components/new-client-form/NewClientForm";
import BenefitsSection from "./components/benefits-section/BenefitsSection";
import CustomerTestimonials from "./components/customer-testimonials/CustomerTestimonials";

function App() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);

	return (
		<>
			<Header isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			{/* <HeroSection /> */}
			<NewClientForm />
			{/* PARALLAX IMG SECTION */}
			{/* style={{ backgroundImage: `url(${parallaxImgMobile})` }} */}
			<div className="mb-28 relative">
				<div className={`h-[30rem] w-full object-fit bg-no-repeat bg-cover flex justify-center bg-center align-center bg-fixed brightness-50 bg-[url(src/assets/client-in-backseat-mobile.jpg)] min-[350px]:bg-[url(src/assets/client-in-backseat.jpg)]`}></div>
				<div className="w-full absolute top-1/2 -translate-y-1/2 ">
					<h2 className="px-2 mx-auto mb-30 font-taviraj max-w-[600px] text-30 min-[400px]:text-38 min-[800px]:text-50 text-center text-white">Lorem ipsum dolor sit amet consectetur </h2>
				</div>
			</div>

			{/* BENEFITS SECTION */}
			<BenefitsSection />
			{/* REVIEWS SECTION */}
			<CustomerTestimonials />
			<footer className="border-2">
				<h4 className="text-24">Wellington Limousine</h4>
				<div className="flex">
					<div>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur corrupti voluptates.</p>
						<button>Reach out to us</button>
					</div>
					<div className="border-4">
						<div>
							<img src="" alt="img" />
							<span>Location here</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default App;
