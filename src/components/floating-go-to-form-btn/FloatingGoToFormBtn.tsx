import { MdEmail } from "react-icons/md";

function FloatingGoToFormBtn({ handleInputRefFocusScroll }: { handleInputRefFocusScroll: () => void }) {
	return (
		<button onClick={() => handleInputRefFocusScroll()} className="p-[.8rem] fixed z-20 bottom-12 right-6 bg-[#D7B65C] rounded-full">
			<MdEmail size={"2.4rem"} color="#171717" />
		</button>
	);
}

export default FloatingGoToFormBtn;
