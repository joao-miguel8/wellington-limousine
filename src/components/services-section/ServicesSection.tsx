import { Link } from "react-router-dom";
import airplaneIMG from "../../assets/airplane.jpg";
import privateTransferIMG from "../../assets/privatetransfer.jpg";
import personalTransportIMG from "../../assets/personaltransport.jpg";
import eventIMG from "../../assets/event.jpg";
import cityIMG from "../../assets/city.jpg";

function ServicesSection() {
	const servicesData = [
		{
			title: "Airport Transportation",
			description: "Elevate your airport experience with our premium transportation service! Enjoy quick pickups and drop-offs with budget-friendly rates. Leave airport worries behind and embrace the excitement of travel!",
			img: airplaneIMG,
		},
		{
			title: "Private Transfers",
			description:
				"Whether you're heading to or from the airport, an event, holiday parties, in group or individual our express pickups and transfers ensure you're on time, every time. Enjoy the comfort, With our private transfers, you can avoid unreliable transportation options and sit back, relax, and let us take care of all your travel needs.",
			img: privateTransferIMG,
		},
		{
			title: "Personal Chauffeur",
			description: "Experience the convenience of personal pickups and executive transportation designed just for you and your  luxury transportation needs!",
			img: personalTransportIMG,
		},
		{
			title: "Special Events, City Trips,",
			description:
				"Arrive in style at your special event with our chauffeur service! Whether it's weddings or event outings, we've got you covered. Our professional chauffeurs ensure a seamless and luxurious experience, making every journey memorable. Book now and elevate your event with our VIP transportation services.",
			img: eventIMG,
		},
		{
			title: "City Trips,",
			description: "Enjoy city trips and friend gatherings with our chauffeur service transportation, From spontaneous rides with friends to planned outings, we're your go-to for city trips, Let our professional driving experience be a part of your journey.",
			img: cityIMG,
		},
	];
	return (
		<section>
			{/* SERVICES Heading Section */}
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
				<p className="mt-10 font-taviraj text-center font-light italic text-22">Be our potential client and experience amazing transportation services you deserve </p>
				<Link to={"/"} className="mt-8 mx-20 px-4 py-2 flex flex-col items-center text-20 font-mulish font-semibold text-[#171717] bg-[#D7B65C] hover:bg-[#dfab1c] duration-300">
					Book Your Next Ride Now
				</Link>
			</div>
			{/* SERVICES list */}
			<div className="mx-auto px-10 mt-10 mb-40 max-w-[800px]">
				{servicesData.map((service, i) => {
					return (
						<div className={`mt-20 items-center flex gap-10 ${i % 2 !== 0 && "flex-row-reverse"} max-[800px]:flex-col-reverse`}>
							<div key={service.title} className="flex-1">
								<h4 className="mt-4 font-taviraj text-center text-26 font-medium">{service.title}</h4>
								<p className="mt-4 text-center text-18 font-mulish">{service.description}</p>
							</div>
							<img src={service?.img} alt={service.title} className="w-[28rem] flex-1 bg-gray-200 rounded-md" />
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default ServicesSection;
