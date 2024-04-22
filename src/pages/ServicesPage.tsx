import { useState } from "react";
import BenefitsSection from "../components/benefits-section/BenefitsSection";
import Header from "../components/header/Header";
import Nav from "../components/Nav";

function ServicesPage() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);

	return (
		<>
			<Header setIsMenuClosed={setIsMenuClosed}>
				<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			</Header>
			<main className="mt-40">
				{/* BENEFITS SECTION */}
				<BenefitsSection />
			</main>
		</>
	);
}

export default ServicesPage;
