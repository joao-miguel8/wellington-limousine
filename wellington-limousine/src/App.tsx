import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import NewClientForm from "./components/new-client-form/NewClientForm";
import HeroSection from "./components/hero-section/HeroSection";
import paralaxImg from "./assets/luxury-car-img.jpg";
import paralaxImg2 from "./assets/client-in-backseat.jpg";

function App() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);
	return (
		<>
			<Header isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			{/* <HeroSection /> */}
			<NewClientForm />

			<div style={{ backgroundImage: `url(${paralaxImg})` }} className="mb-[2000px] h-[50rem] w-full object-fit bg-no-repeat bg-cover  flex justify-center bg-center align-center bg-fixed">
				<h2 className=" mt-20 font-taviraj m-auto max-w-[600px] text-50 text-center text-white ">Lorem ipsum dolor sit amet consectetur </h2>
			</div>
		</>
	);
}

export default App;
