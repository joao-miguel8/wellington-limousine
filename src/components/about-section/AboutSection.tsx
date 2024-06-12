import { Link } from "react-router-dom";

function AboutSection() {
	return (
		<section className="mx-10 mt-16">
			<div className="flex flex-col items-center">
				<span id="About" className="font-taviraj text-16 font-semibold italic text-[#D7B65C] border-b border-[#D7B65C]">
					About Us
				</span>
				<h1 className="mt-4 font-taviraj font-medium color-[#171717] text-28 lg:text-24">
					Discover <span className="text-[#D7B65C]">our story</span>
				</h1>
			</div>
			<p className="mt-20 mb-8 text-20 font-mulish">
				Welcome to Wellington Limousine, <p className="mt-4 text-20"> Your premier chauffeur service in the heart of Connecticut, NJ, the NY tristate area.</p> <span className="inline-block mt-4 text-20"> Established in 2016 </span>, we have been dedicated to providing an unparalleled
				experience for our discerning clients. Since our launch, we have taken pride in transforming transportation into an elevated service. Our journey started with a commitment to excellence and a passion for delivering a chauffeur experience that goes beyond expectations.
			</p>
			<p className="mt-4 text-20 font-mulish">
				At Wellington Limousine, we understand that our clients are not just passengers; they are valued partners in our journey. <span className="font-black">Our business ensures a safe and professional</span> ride every time. <span className="inline-block"> We are</span>
				<span className="inline-block font-black">a personalized and Private Service</span>, your comfort is our priority, and we tailor our services to meet your unique needs. We also value punctuality, we know the importance of time, and we are committed to a prompt and punctual service.
			</p>
			<hr className="my-10 border-gray-300"></hr>
			<p className="mt-4 text-20 font-mulish text-center">
				Whether you're heading to a{" "}
				<Link to={"/services"} className="underline font-bold text-[#b9901f]">
					business meeting,{" "}
				</Link>
				<Link to={"/services"} className="underline font-bold text-[#b9901f]">
					special event{" "}
				</Link>
				or{" "}
				<Link to={"/services"} className="underline font-bold text-[#b9901f]">
					simply need a reliable ride
				</Link>
				, we are here for you. Join us on this journey of luxury, comfort, and professional service and.{" "}
				<Link to={"/booking"} className="font-bold underline">
					Fill out our form to be our future client
				</Link>
			</p>
		</section>
	);
}

export default AboutSection;
