import benefitsImg from "../../assets/cartoon-driver-img.jpg";
import { FaCarSide } from "react-icons/fa";

function BenefitsSection() {
	const benefitsData = [
		{
			icon: <FaCarSide size={"2.8rem"} color="#D7B65C" />,
			description: "Licensed and Insured",
		},
		{
			icon: <FaCarSide size={"2.8rem"} color="#D7B65C" />,
			description: "Booked by Appointments only",
		},
		{
			icon: <FaCarSide size={"2.8rem"} color="#D7B65C" />,
			description: "Frequently serviced, clean vehicles.",
		},
		{
			icon: <FaCarSide size={"2.8rem"} color="#D7B65C" />,
			description: "Professionally Trained Drivers",
		},
		{
			icon: <FaCarSide size={"2.8rem"} color="#D7B65C" />,
			description: "Shopping, hospitals, Special Events",
		},
		{
			icon: <FaCarSide size={"2.8rem"} color="#D7B65C" />,
			description: "Airport pickup and drop off",
		},
	];

	return (
		<div className="bg-white">
			<div className="px-2 mx-auto max-w-[350px]">
				<h4 className="mx-auto font-taviraj font-medium text-center color-[#171717] text-22 min-[350px]:text-28">
					Benefits <span className="text-[#D7B65C]">ipsum dolor </span>
					malaga lada
				</h4>
				<p className="mt-4 font-taviraj text-center font-light italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>

			{/* BENEFITS LIST */}
			<div className="mt-12 p-4 justify-center gap-4 bg-[#171717]">
				<div className="mx-auto p-8 max-w-[600px] flex flex-wrap  justify-center gap-8 min-[404px]:justify-between">
					{benefitsData.map(benefit => {
						return (
							<div className="flex-33% max-w-[120px] flex flex-col items-center max-[400px]:mb-8">
								{benefit.icon}
								<span className="mt-4 font-taviraj text-center font-medium text-white">{benefit.description}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default BenefitsSection;
