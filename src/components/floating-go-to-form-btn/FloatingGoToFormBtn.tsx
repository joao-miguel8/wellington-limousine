import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function FloatingGoToFormBtn() {
	return (
		<Link to={"/booking"} className="p-[.8rem] fixed z-20 bottom-12 right-6 bg-[#D7B65C] rounded-full">
			<MdEmail size={"2.4rem"} color="#171717" />
		</Link>
	);
}

export default FloatingGoToFormBtn;
