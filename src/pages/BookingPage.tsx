import { useState } from "react";
import Header from "../components/header/Header";
import Nav from "../components/Nav";

function BookingPage() {
	const [isMenuClosed, setIsMenuClosed] = useState(false);
	type ClientFormDataType = {
		name: string;
		email: string;
		phoneNumber: string | null;
		message: string;
	};

	const [clientFormData, setClientFormData] = useState<ClientFormDataType>({
		name: "",
		email: "",
		phoneNumber: null,
		message: "",
	});

	return (
		<section>
			<Header setIsMenuClosed={setIsMenuClosed}>
				<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
			</Header>
			{/* Booking Heading Section */}
			<div className="mt-40 pb-20 px-2 mx-auto border-b-2 border-gray-150">
				<div className="flex flex-col items-center">
					<span id="Services" className="font-taviraj text-16 font-semibold italic text-[#D7B65C] border-b border-[#D7B65C]">
						Booking
					</span>
					<h2 className="mt-4 mx-auto font-taviraj font-medium text-center color-[#171717] text-28 min-[350px]:text-28">
						<span className="text-[#D7B65C]">Book a future </span>
						visit for one of our Chauffeur Services
					</h2>
				</div>
				<div className="mx-auto max-w-[600px]">
					<p className="mt-10 font-taviraj text-center font-light text-20">As a single-operator business, we maintain a stringent selection process for our services. We extend our apologies in advance should we not be able to accommodate your future booking.</p>
					<p className="mt-10 font-taviraj text-center font-light text-20">When completing our form, kindly provide your preferred pickup location, time, and transportation type, such as wedding transportation.</p>
					<p className="mt-10 font-taviraj text-center font-light text-20">Upon submission of our booking form, we will promptly reach out to you at our earliest convenience.</p>
				</div>
			</div>
			{/* Form + Google Img */}
			<div className="flex flex-col">
				{/* Google Img */}
				<div className={`w-full h-96 bg-[url('assets/ny-ss.png')] bg-cover bg-[#060606] opacity-60`}></div>
				<section className="z-10 flex-1 -mt-20 mx-auto pb-24 rounded-sm w-[700px]">
					{/* Form */}
					<form
						action="https://api.web3forms.com/submit"
						method="POST"
						className="mx-4 p-8 mt-10 bg-[#f9f9f9]
               [box-shadow:rgba(50,_50,_93,_0.25)_0px_2px_5px_-1px,_rgba(0,_0,_0,_0.3)_0px_1px_3px_-1px]
               ">
						<div className="flex flex-col w-full gap-6">
							<div className="flex flex-col font-mulish">
								<label htmlFor="name">Name</label>
								<input id="name-input" value={clientFormData.name} onChange={e => setClientFormData({ ...clientFormData, name: e.target.value })} name="name" type="text" placeholder="Enter your name" className="mt-2 p-2 border-[1.2px] border-[#e0dfdf]" />
							</div>
							<div className="flex flex-col font-mulish">
								<label htmlFor="">Email</label>
								<input value={clientFormData.email} onChange={e => setClientFormData({ ...clientFormData, email: e.target.value })} type="email" placeholder="Enter your email" className="mt-2 p-2 border-[1.2px] border-[#e0dfdf]" />
							</div>
							<div className="flex flex-col font-mulish">
								<label htmlFor="phoneNumber">
									Phone Number<span className="text-14 italic font-thin"> (Optional)</span>
								</label>
								<input
									id="phone-number-input"
									value={clientFormData.phoneNumber || ""}
									onChange={e => setClientFormData({ ...clientFormData, phoneNumber: e.target.value })}
									name="phoneNumber"
									type="tel"
									placeholder="Enter your Phone Number"
									className="mt-2 p-2 border-[1.2px] border-[#e0dfdf]"
								/>
							</div>
							<div className="flex flex-col font-mulish">
								<label htmlFor="message">Leave us a message</label>
								<textarea value={clientFormData.message} onChange={e => setClientFormData({ ...clientFormData, message: e.target.value })} name="message" placeholder="Type a message here" className="mt-2 p-2 resize-none border-[1.2px] border-[#e0dfdf]" />
							</div>
							<div className="flex justify-center w-full">
								<button type="submit" className="mx-10 p-2 w-full text-white font-bold bg-[#D7B65C] hover:bg-[#dfab1c] duration-300">
									Submit Form
								</button>
							</div>
						</div>
						<input type="hidden" name="access_key" value="94e0caf1-dd78-47d3-8e97-f4a2a6c6f9b9" />
					</form>
				</section>
			</div>
		</section>
	);
}

export default BookingPage;
