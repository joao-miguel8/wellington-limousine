import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HeroSection from "./components/hero-section/HeroSection";
import { MdMenu } from "react-icons/md";

function App() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);
	return (
		<>
			<header className="h-16 w-full top-0 fixed flex items-center justify-end">
				<button onClick={() => setIsMenuClosed(true)} className="mr-8 text-white hover:text-[#D7B65C] hover:duration-200">
					<MdMenu size={"1.8rem"} />
				</button>
			</header>
			<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			{/* <HeroSection /> */}
		</>
	);
}

export default App;
