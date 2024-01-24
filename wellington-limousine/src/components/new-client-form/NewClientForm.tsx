import { useState } from "react";

function NewClientForm() {
	type ClientFormDataType = {
		name: string;
		email: string;
		message: string;
	};

	const [clientFormData, setClientFormData] = useState<ClientFormDataType>({
		name: "",
		email: "",
		message: "",
	});

	return (
		<section className="mt-[14rem] mx-auto pb-10 pt-6 rounded-sm max-w-[700px]">
			<div className="flex flex-col items-center">
				<span className="font-taviraj text-16 font-semibold italic text-[#D7B65C] border-b border-[#D7B65C]">Sign up</span>
				<h4 className="mt-4 mx-auto font-taviraj font-medium text-center color-[#171717] text-22 min-[350px]:text-28 max-w-[350px]">Notify us by email to be a potential client</h4>
			</div>
			<form action="" className="mx-2 p-8 mt-10 bg-[#F8F8F8]">
				<div className="flex flex-col w-full gap-6 ">
					<div className="flex flex-col font-mulish">
						<label htmlFor="name">Name</label>
						<input value={clientFormData.name} onChange={e => setClientFormData({ ...clientFormData, name: e.target.value })} name="name" type="text" placeholder="e.g John Smith" className="mt-2 p-2 border-[1.5px] border-[#bebebe]" />
					</div>
					<div className="flex flex-col font-mulish">
						<label htmlFor="">Email</label>
						<input value={clientFormData.email} onChange={e => setClientFormData({ ...clientFormData, email: e.target.value })} type="text" placeholder="e.g example@website.com" className="mt-2 p-2 border-[1.5px] border-[#bebebe]" />
					</div>
					<div className="flex flex-col font-mulish">
						<label htmlFor="message">Leave us message</label>
						<textarea value={clientFormData.message} onChange={e => setClientFormData({ ...clientFormData, message: e.target.value })} name="message" placeholder="e.g your message here" className="mt-2 p-2 resize-none border-[1.5px] border-[#bebebe]" />
					</div>
					<div className="flex justify-center w-full">
						<button type="submit" className="mx-10 p-2 w-full text-white font-bold bg-[#D7B65C] hover:bg-[#dfab1c] duration-300">
							Send Email
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default NewClientForm;
