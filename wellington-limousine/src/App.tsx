import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import NewClientForm from "./components/new-client-form/NewClientForm";
import HeroSection from "./components/hero-section/HeroSection";
import paralaxImg from "./assets/luxury-car-img.jpg";
import paralaxImg2 from "./assets/client-in-backseat.jpg";
import BenefitsSection from "./components/benefits-section/BenefitsSection";

function App() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);

	return (
		<>
			<Header isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			{/* <HeroSection /> */}
			<NewClientForm />
			{/* PARALAX IMG SECTION */}
			<div style={{ backgroundImage: `url(${paralaxImg})` }} className="mb-[100px] h-[50rem] w-full object-fit bg-no-repeat bg-cover  flex justify-center bg-center align-center bg-fixed">
				<h2 className="mx-4 mt-20 font-taviraj m-auto max-w-[600px] text-34 min-[500px]:text-50 text-center text-white ">Lorem ipsum dolor sit amet consectetur </h2>
			</div>
			{/* BENEFITS SECTION */}
			<BenefitsSection />
		</>
	);
}

export default App;
