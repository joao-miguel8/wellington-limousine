function BenefitsSection() {
	const benefitsData = [
		{
			title: "Licensed and Insured",
			description: "Our private chauffeur service prioritizes your safety and peace of mind. With fully licensed and insured drivers.",
		},
		{
			title: "Booked by Appointments only",
			description: "Convenience of a personalized transportation tailored to your schedule, We operate on an appointment-only basis.",
		},
		{
			title: "Frequently serviced, clean vehicles",
			description: "Well-maintained vehicle for every journey. Our vechiles perform regular servicing to ensure optimal performance and cleanliness.",
		},
		{
			title: "Professionally Trained Driver",
			description: "We are an owner operator service based business, providing top-tier service. With more 7 years of prior experience.",
		},
		{
			title: "Shopping, hospitals, Special Events",
			description: "Whether it's a shopping spree, a medical appointment, or a special event, we've got you covered. Our chauffeur service extends beyond conventional transportation.",
		},
		{
			title: "Airport pickup and drop off",
			description: "Stress-free with our seamless airport transfer service. From curbside pickup to timely drop-offs, prioritizing efficiency and comfort for your airport transportation needs.",
		},
	];

	return (
		<div className="px-20 bg-white">
			{/* BENEFITS Heading Section */}
			<div className="mb-20 mx-auto ">
				<div className="flex flex-col items-center">
					<span id="Services" className="font-taviraj text-16 font-semibold italic text-[#D7B65C] border-b border-[#D7B65C]">
						Benefits
					</span>
					<h2 className="mt-4 mx-auto font-taviraj font-medium text-center color-[#171717] text-28 min-[350px]:text-28">
						Our Chauffeur Services include <span className="text-[#D7B65C]">Unmatched</span> Benefits
					</h2>
				</div>
				<p className="mt-10 font-taviraj text-center font-light italic text-22">Chauffeur Services benefits we provide, Where Luxury Meets Quality</p>
			</div>
			{/* BENEFITS LIST */}
			<div className="divide-y divide-solid gap-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
				{benefitsData.map(benefit => {
					return (
						<div key={benefit.title} className="p-4 group flex max-[800px]:flex-col max-[800px]:mt-10 gap-4 items-center max-[400px]:mb-8 ">
							<h4 className="p-4 bg-[#2b2b2b] text-white font-taviraj text-center text-16 font-black">{benefit.title}</h4>

							<p className="text-black text-16 leading-8 max-[800px]:text-center">{benefit.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default BenefitsSection;
