import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HeroSection from "./components/hero-section/HeroSection";
import { MdMenu } from "react-icons/md";
import Header from "./components/header/Header";

function App() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);
	return (
		<>
			<Header isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			{/* <HeroSection /> */}
		</>
	);
}

export default App;
