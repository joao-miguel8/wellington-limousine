import { useState } from "react";
import AboutSection from "../components/about-section/AboutSection";
import Header from "../components/header/Header";
import Nav from "../components/Nav";
import Footer from "../components/footer/Footer";

function AboutPage() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);

	return (
		<>
			<Header setIsMenuClosed={setIsMenuClosed}>
				<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			</Header>
			<main>
				<div className="mt-40 mb-40">
					<AboutSection />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default AboutPage;
