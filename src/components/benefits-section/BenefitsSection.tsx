function BenefitsSection() {
	const benefitsData = [
		{
			icon: (
				<svg className="w-12" fill="#D7B65C" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<title>{"license-solid"}</title>
						<path d="M19,30H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H32a2,2,0,0,1,2,2V18.37a8.34,8.34,0,0,0-13.49,9.79l-.93,1.14ZM7,12v1.6H24V12Zm0,5.6H18V16H7Zm0,7H17V23H7Z" className="clr-i-solid clr-i-solid-path-1" />
						<path d="M33.83,23.59a6.37,6.37,0,1,0-10.77,4.59l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37A6.34,6.34,0,0,0,33.83,23.59Zm-10.74,0a4.37,4.37,0,1,1,4.37,4.31A4.35,4.35,0,0,1,23.1,23.59Z" className="clr-i-solid clr-i-solid-path-2" />
						<rect x={0} y={0} width={36} height={36} fillOpacity={0} />
					</g>
				</svg>
			),
			title: "Licensed and Insured",
			description:
				"Our private chauffeur service prioritizes your safety and peace of mind. With fully licensed and insured drivers, we adhere to the highest standards of professionalism and compliance. Trust in our credentials to ensure a secure and reliable transportation experience.Keywords: licensed chauffeur, insured drivers, safe transportation, professional chauffeur service",
		},
		{
			icon: (
				<svg className="w-12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 2H13.5C14.3284 2 15 2.67157 15 3.5V13.5C15 14.3284 14.3284 15 13.5 15H1.5C0.671573 15 0 14.3284 0 13.5V3.5C0 2.67157 0.671573 2 1.5 2H3V0H4V2H11V0H12V2ZM6 8H3V7H6V8ZM12 7H9V8H12V7ZM6 11H3V10H6V11ZM9 11H12V10H9V11Z"
							fill="#D7B65C"></path>
					</g>
				</svg>
			),
			title: "Booked by Appointments only",
			description:
				"Enjoy the convenience of personalized transportation tailored to your schedule. By operating on an appointment-only basis, we guarantee punctuality and availability when you need it most. Say goodbye to waiting and uncertainty – book your ride with us and experience unparalleled reliability.Keywords: appointment-based chauffeur, on-demand transportation, scheduled rides, punctual chauffeur service",
		},
		{
			icon: (
				<svg className="w-12" fill="#D7B65C" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.99 511.99" xmlSpace="preserve">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<g>
							<g>
								<path d="M153.088,303.61c-39.849,0-72.27,32.421-72.27,72.27c0,39.849,32.421,72.27,72.27,72.27 c39.849,0,72.27-32.421,72.27-72.27C225.357,336.031,192.937,303.61,153.088,303.61z M178.875,331.695 c4.892-4.892,12.823-4.892,17.714,0c4.892,4.892,4.892,12.823,0,17.714c-2.123,2.123-8.352,5.013-14.722,7.606 c-2.759-4.195-6.408-7.754-10.678-10.405C173.803,340.175,176.731,333.841,178.875,331.695z M153.088,313.676 c6.918,0,12.526,5.608,12.526,12.526c0,3.045-2.427,9.633-5.144,16.053c-2.38-0.522-4.848-0.805-7.382-0.805 s-5.002,0.284-7.382,0.805c-2.717-6.422-5.144-13.009-5.144-16.053C140.562,319.284,146.169,313.676,153.088,313.676z M109.584,331.695c4.892-4.892,12.823-4.892,17.714,0c2.144,2.146,5.072,8.478,7.686,14.916 c-4.271,2.651-7.919,6.21-10.678,10.405c-6.37-2.592-12.598-5.483-14.722-7.606C104.693,344.518,104.693,336.587,109.584,331.695z M91.565,375.198c0-6.918,5.608-12.526,12.526-12.526c2.969,0,9.308,2.308,15.576,4.943c-0.655,2.65-1.01,5.416-1.01,8.266 c0,2.406,0.25,4.753,0.722,7.021c-6.174,2.583-12.364,4.822-15.288,4.822C97.174,387.724,91.565,382.116,91.565,375.198z M127.299,418.701c-4.892,4.892-12.823,4.892-17.714,0c-4.892-4.892-4.892-12.823,0-17.714c2.046-2.046,7.907-4.806,14.032-7.323 c2.736,4.518,6.486,8.352,10.925,11.203C132.045,410.919,129.324,416.676,127.299,418.701z M153.088,436.721 c-6.919,0-12.526-5.608-12.526-12.526c0-2.849,2.124-8.796,4.623-14.81c2.54,0.599,5.184,0.925,7.903,0.925 c2.72,0,5.364-0.327,7.904-0.925c2.498,6.012,4.623,11.961,4.623,14.81C165.613,431.112,160.005,436.721,153.088,436.721z M153.088,395.392c-10.776,0-19.511-8.735-19.511-19.512c0-10.776,8.735-19.511,19.511-19.511s19.512,8.735,19.512,19.511 C172.598,386.656,163.863,395.392,153.088,395.392z M196.591,418.701c-4.892,4.892-12.823,4.892-17.714,0 c-2.024-2.025-4.746-7.782-7.242-13.835c4.439-2.85,8.189-6.684,10.925-11.203c6.124,2.518,11.985,5.277,14.032,7.323 C201.482,405.878,201.482,413.809,196.591,418.701z M202.084,387.724c-2.924,0-9.115-2.239-15.288-4.822 c0.472-2.268,0.721-4.616,0.721-7.021c0-2.849-0.354-5.616-1.01-8.266c6.268-2.634,12.606-4.943,15.576-4.943 c6.919,0.001,12.527,5.608,12.527,12.527C214.61,382.116,209.002,387.724,202.084,387.724z" />
							</g>
						</g>
						<g>
							<g>
								<path d="M493.406,474.843L457.971,373.79l-0.188-67.934l-55.474,64.243l0.023,8.588c0.009,3.139,0.549,6.253,1.597,9.212 l37.02,105.524c5.132,14.492,21.038,22.069,35.518,16.941C490.954,505.232,498.538,489.329,493.406,474.843z" />
							</g>
						</g>
						<g>
							<g>
								<circle cx={295.076} cy={48.056} r={48.056} />
							</g>
						</g>
						<g>
							<g>
								<path d="M465.191,202.943l-67.416-107.32c-9.538-15.183-29.577-19.758-44.76-10.222l-49.024,30.796 c-15.183,9.538-19.758,29.577-10.222,44.759l5.158,8.211l26.025-44.195l-24.119,84.828l-76.399,24.43 c-12.183,3.896-18.904,17.013-15.023,29.149c3.848,12.035,16.818,18.969,29.149,15.023l89.996-28.817 c7.413-2.37,13.121-8.291,15.242-15.744l25.007-92.737c-0.269,9.099-2.476,83.891-2.756,93.393 c-0.227,7.666-5.779,18.437-11.136,23.793l4.88,7.769l0.001-0.002l8.865,14.116l19.01-12.335l-62.968,72.922 c-2.919,3.382-4.983,7.418-6.013,11.766l-31.25,125.189c-3.545,14.953,5.701,29.948,20.655,33.496 c14.928,3.54,29.941-5.676,33.495-20.655l29.679-118.57l89.302-104.98C475.93,248.949,477.8,223.016,465.191,202.943z" />
							</g>
						</g>
						<g>
							<g>
								<path d="M288.128,350.618c0,0,0,0,0-0.001c-1.678-3.392-5.164-5.731-9.204-5.731h-10.159l8.799-5.08 c4.914-2.836,6.597-9.12,3.761-14.034l-18.363-31.807l-17.615,5.641c-32.7,10.462-61.824-13.683-61.824-43.27 c0-2.333,0.183-4.63,0.534-6.879c-0.306-5.398-4.768-9.686-10.244-9.686h-41.443c-5.674,0-10.273,4.599-10.273,10.273v10.159 l-5.08-8.799c-2.837-4.914-9.12-6.597-14.034-3.761l-35.893,20.724c-4.914,2.838-6.597,9.12-3.761,14.034l5.08,8.799l-8.799-5.08 c-4.914-2.836-11.196-1.153-14.034,3.761l-20.722,35.891c-2.836,4.914-1.153,11.196,3.761,14.034l8.799,5.08H27.252 c-5.674,0-10.273,4.599-10.273,10.273v41.443c0,5.674,4.599,10.273,10.273,10.273h10.159l-8.799,5.08 c-4.914,2.836-6.597,9.12-3.761,14.034l20.722,35.891c2.836,4.914,9.12,6.597,14.034,3.761l8.799-5.08l-5.08,8.799 c-2.837,4.914-1.153,11.196,3.761,14.034l35.891,20.722c4.914,2.836,11.196,1.153,14.034-3.761l5.08-8.799v10.159 c0,5.674,4.599,10.273,10.273,10.273h41.443c5.674,0,10.273-4.599,10.273-10.273v-10.159l5.08,8.799 c2.836,4.914,9.12,6.597,14.034,3.761l35.891-20.722c4.914-2.836,6.597-9.12,3.761-14.034l-5.08-8.799l8.799,5.08 c4.914,2.838,11.196,1.153,14.034-3.761l2.993-5.184l17.729-30.707c2.837-4.914,1.153-11.196-3.761-14.034l-8.799-5.08h10.159 c5.674,0,10.273-4.6,10.273-10.274C289.196,350.909,289.635,353.666,288.128,350.618z M153.088,466.964 c-50.224,0-91.084-40.861-91.084-91.084c0-50.223,40.861-91.084,91.084-91.084c50.223,0,91.084,40.86,91.084,91.084 C244.171,426.105,203.312,466.964,153.088,466.964z" />
							</g>
						</g>
					</g>
				</svg>
			),
			title: "Frequently serviced, clean vehicles.",
			description:
				"Step into a pristine and well-maintained vehicle for every journey. Our fleet undergoes regular servicing to ensure optimal performance and cleanliness. Experience luxury and comfort without compromise, every time you ride with us.Keywords: clean car service, maintained vehicles, luxury transportation, chauffeur car cleaning",
		},
		{
			icon: (
				<svg className="w-12" fill="#D7B65C" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#D7B65C">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<g>
							<g>
								<g>
									<path d="M486.639,412.16c-51.2-26.948-90.351-41.899-125.124-47.804l3.78-5.205c1.485-2.039,1.997-4.642,1.374-7.091 l-7.919-31.676c21.231-29.935,33.784-67.328,33.784-102.784v-52.625c0.034-0.026,0.068-0.051,0.102-0.077 c7.006-5.871,12.023-13.542,14.711-22.042l-8.73-2.381l-44.749-7.859c-65.877-11.861-131.695-11.861-195.678-0.017l-45.568,8.047 l-8.03,2.005c2.671,8.585,7.706,16.324,14.763,22.246c0.034,0.034,0.077,0.051,0.111,0.085V217.6 c0,35.456,12.553,72.849,33.775,102.784l-7.919,31.676c-0.614,2.449-0.111,5.052,1.374,7.091l3.789,5.205 c-34.773,5.905-73.924,20.855-125.133,47.804C9.711,420.395,0,436.498,0,454.179v36.489c0,4.71,3.814,8.533,8.533,8.533h494.933 c4.71,0,8.533-3.823,8.533-8.533v-36.489C512,436.498,502.281,420.395,486.639,412.16z M220.075,431.028l-57.233-78.694 l3.831-15.309c0.034,0.043,0.068,0.068,0.102,0.102c20.617,22.409,46.831,38.195,76.39,41.788c0.017,0,0.034,0.009,0.06,0.009 L220.075,431.028z M186.701,332.835c-2.142-2.005-4.301-3.951-6.357-6.144c-0.026-0.017-0.043-0.043-0.068-0.06 c-3.123-3.328-6.161-6.869-9.097-10.615c-0.256-0.333-0.64-0.521-0.947-0.802c-20.105-25.37-33.698-59.187-33.698-97.613v-43.494 c0.205,0.06,0.418,0.094,0.631,0.145c0.777,0.222,1.579,0.375,2.364,0.555c0.93,0.205,1.852,0.435,2.79,0.58 c0.845,0.136,1.698,0.196,2.551,0.29c0.887,0.094,1.766,0.222,2.662,0.265c1.109,0.051,2.227,0.009,3.336-0.017 c0.649-0.009,1.297,0.026,1.946-0.017c1.792-0.111,3.584-0.316,5.376-0.64c63.983-11.844,129.801-11.844,195.678,0.017 c2.5,0.444,4.992,0.606,7.475,0.657c0.273,0,0.546,0.068,0.819,0.068c0.265,0,0.512-0.068,0.768-0.068 c4.258-0.068,8.474-0.64,12.535-1.835V217.6c0,38.426-13.602,72.243-33.707,97.613c-0.299,0.282-0.691,0.469-0.947,0.802 c-2.927,3.746-5.965,7.287-9.088,10.607c-0.026,0.026-0.051,0.051-0.077,0.077c-2.057,2.185-4.215,4.13-6.349,6.127 c-20.864,18.816-45.645,29.841-69.299,29.841C232.337,362.667,207.556,351.642,186.701,332.835z M291.925,431.028l-23.151-52.105 c0.017,0,0.034-0.009,0.051-0.009c29.559-3.593,55.782-19.379,76.39-41.788c0.034-0.034,0.077-0.06,0.102-0.102l3.84,15.309 L291.925,431.028z" />
									<path d="M155.159,115.805c65.929-12.203,133.82-12.211,201.702,0.009l45.474,8.021l7.125,1.937 C407.976,63.24,356.75,12.8,293.86,12.8h-75.725c-62.831,0-114.005,50.338-115.593,112.794l6.528-1.63L155.159,115.805z M230.397,46.933c0-4.71,3.814-8.533,8.533-8.533h34.133c4.719,0,8.533,3.823,8.533,8.533V89.6c0,4.71-3.814,8.533-8.533,8.533 h-34.133c-4.719,0-8.533-3.823-8.533-8.533V46.933z" />
									<rect x={247.464} y={55.466} width={17.067} height={25.6} />
								</g>
							</g>
						</g>
					</g>
				</svg>
			),
			title: "Professionally Trained Drivers",
			description:
				"Our chauffeurs are more than just drivers – they're trained professionals dedicated to providing top-tier service. With extensive training and expertise, our team excels in navigating diverse routes and handling various transportation needs. Sit back, relax, and let our skilled drivers take care of the rest.Keywords: professional chauffeurs, trained drivers, skilled chauffeur team, expert transportation service",
		},
		{
			icon: (
				<svg className="w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11 2C9.34315 2 8 3.34315 8 5V6.00038C7.39483 6.00219 6.86113 6.01237 6.41261 6.06902C5.8235 6.14344 5.25718 6.31027 4.76902 6.73364C4.28087 7.15702 4.03562 7.69406 3.87865 8.26672C3.73286 8.79855 3.63761 9.46561 3.52795 10.2335L3.51947 10.2929L2.65222 16.3636C2.50907 17.3653 2.38687 18.2204 2.38563 18.9086C2.38431 19.6412 2.51592 20.3617 3.03969 20.9656C3.56347 21.5695 4.25813 21.8017 4.98354 21.904C5.66496 22.0001 6.52877 22.0001 7.54064 22H16.4594C17.4713 22.0001 18.3351 22.0001 19.0165 21.904C19.7419 21.8017 20.4366 21.5695 20.9604 20.9656C21.4842 20.3617 21.6158 19.6412 21.6144 18.9086C21.6132 18.2204 21.491 17.3653 21.3478 16.3635L20.4721 10.2335C20.3625 9.46561 20.2672 8.79855 20.1214 8.26672C19.9645 7.69406 19.7192 7.15702 19.2311 6.73364C18.7429 6.31027 18.1766 6.14344 17.5875 6.06902C17.1389 6.01237 16.6052 6.00219 16 6.00038V5C16 3.34315 14.6569 2 13 2H11ZM14 6V5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5V6L14 6ZM9 8C9.55228 8 10 8.44772 10 9V11C10 11.5523 9.55228 12 9 12C8.44772 12 8 11.5523 8 11V9C8 8.44772 8.44772 8 9 8ZM16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9V11C14 11.5523 14.4477 12 15 12C15.5523 12 16 11.5523 16 11V9Z"
							fill="#D7B65C"
						/>
					</g>
				</svg>
			),
			title: "Shopping, hospitals, Special Events",
			description:
				"Whether it's a shopping spree, a medical appointment, or a special event, we've got you covered. Our chauffeur service extends beyond conventional transportation, catering to a wide range of destinations and occasions. Experience convenience and luxury wherever your journey takes you.Keywords: shopping chauffeur, medical transportation, event chauffeur, luxury transportation service",
		},
		{
			icon: (
				<svg className="w-12" fill="#D7B65C" viewBox="0 -3.43 122.88 122.88" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<style type="text/css">{".st0{fill-rule:evenodd;clip-rule:evenodd;}"}</style>
						<g>
							<path
								className="st0"
								d="M38.14,115.91c0-10.58,5.81-15.56,13.46-21.3l0-27.68L1.37,89.25c0-19.32-6.57-17.9,9.05-27.72l0.15-0.09 V49.37h11.22v5.08l8.24-5.13V35.8h11.22v6.54l10.36-6.45V7.3c0-4.02,4.37-7.3,9.7-7.3l0,0c5.34,0,9.7,3.29,9.7,7.3v28.58 l10.47,6.52V35.8l11.22,0v13.59l8.24,5.13v-5.15l11.21,0v12.14c15.56,9.67,9.61,7.78,9.61,27.74L71.01,66.91v27.58 c8.14,5.43,13.46,9.6,13.46,21.43l-12.81,0.11c-2.93-2.3-4.96-4.05-6.52-5.26c-1.18,0.39-2.48,0.6-3.83,0.6h0 c-1.53,0-2.99-0.27-4.28-0.76c-1.68,1.22-3.9,3.04-7.21,5.42L38.14,115.91L38.14,115.91L38.14,115.91z"
							/>
						</g>
					</g>
				</svg>
			),
			title: "Airport pickup and drop off",
			description:
				"Start and end your travels stress-free with our seamless airport transfer service. From curbside pickup to timely drop-offs, we prioritize efficiency and comfort for your airport transportation needs. Trust in us to deliver a smooth and hassle-free journey, every time you fly.Keywords: airport chauffeur, airport transfer service, airport shuttle, reliable airport transportation",
		},
	];

	return (
		<div className="bg-white">
			<div className="pb-20 px-2 mx-auto border-b-2 border-gray-150">
				<div className="flex flex-col items-center">
					<span id="Services" className="font-taviraj text-16 font-semibold italic text-[#D7B65C] border-b border-[#D7B65C]">
						Services
					</span>
					<h2 className="mt-4 mx-auto font-taviraj font-medium text-center color-[#171717] text-28 min-[350px]:text-28">
						We offer <span className="text-[#D7B65C]">exceptional </span>
						benefits
					</h2>
				</div>
				<p className="mt-10 font-taviraj text-center font-light italic text-22">Here is our chosen selection we think enhance our client's experience</p>
			</div>

			{/* BENEFITS LIST */}
			<div className="justify-center gap-4">
				<div className="mx-auto gap-8">
					{benefitsData.map(benefit => {
						return (
							<div key={benefit.title} className="my-28 group flex flex-col items-center max-[400px]:mb-8 text-20 text-black">
								<svg className="w-28 group-hover:-translate-y-2 duration-500">{benefit.icon}</svg>
								<span className="mt-4 font-taviraj text-center font-black text-black">{benefit.title}</span>
								<p className="mt-6 text-black text-18 text-center leading-8">{benefit.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default BenefitsSection;
