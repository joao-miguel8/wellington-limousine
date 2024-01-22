import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import NewClientForm from "./components/new-client-form/NewClientForm";

function App() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);
	return (
		<>
			<Header isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			{/* <HeroSection /> */}
			<NewClientForm />
		</>
	);
}

export default App;
