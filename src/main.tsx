import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import Homepage from "./pages/Homepage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/services",
		element: <ServicesPage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <App /> */}
	</React.StrictMode>
);
