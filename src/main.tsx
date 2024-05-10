import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import Homepage from "./pages/Homepage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import BookingPage from "./pages/BookingPage.tsx";

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
	{
		path: "/booking",
		element: <BookingPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <App /> */}
	</React.StrictMode>
);
