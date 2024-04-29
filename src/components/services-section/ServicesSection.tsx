import { Link } from "react-router-dom";

function ServicesSection() {
	return (
		/* SERVICES Heading Section */
		<div className="mt-40 pb-20 px-2 mx-auto border-b-2 border-gray-150">
			<div className="flex flex-col items-center">
				<span id="Services" className="font-taviraj text-16 font-semibold italic text-[#D7B65C] border-b border-[#D7B65C]">
					Services
				</span>
				<h2 className="mt-4 mx-auto font-taviraj font-medium text-center color-[#171717] text-28 min-[350px]:text-28">
					We offer <span className="text-[#D7B65C]">exceptional </span>
					Chauffeur Services
				</h2>
			</div>
			<p className="mt-10 font-taviraj text-center font-light italic text-22">interested in becoming our potential client, We guarantee booking with us provides the benefits listed below. </p>
			<Link to={"/"} className="mt-8 mx-20 px-4 py-2 flex flex-col items-center text-20 font-mulish font-semibold text-[#171717] bg-[#D7B65C] hover:bg-[#dfab1c] duration-300">
				Book Your Next Ride Now
			</Link>
		</div>
	);
}

export default ServicesSection;
