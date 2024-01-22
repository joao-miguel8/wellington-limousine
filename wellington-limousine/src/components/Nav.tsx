import { MdOutlineMail } from "react-icons/md";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";

function Nav() {
	const menuIconStyling = {
		size: "1.4rem",
		color: "#ffff",
	};
	const { size, color } = menuIconStyling;

	const menuItems = [
		{ name: "About", icon: <GoQuestion size={size} color={color} /> },
		{ name: "Services", icon: <MdOutlineDesignServices size={size} color={color} /> },
		{ name: "Reviews", icon: <MdOutlineQuestionAnswer size={size} color={color} /> },
		{ name: "Contact", icon: <MdOutlineMail size={size} color={color} /> },
	];

	return (
		<div className="flex w-full fixed bottom-0 sm:bottom-auto sm:top-2">
			<nav className="mx-auto p-2 w-full flex justify-center  bg-gray-800 sm:w-[400px] sm:rounded-full ">
				<ul className="px-10 w-full flex justify-between items-center max-[400px]:py-2">
					{menuItems.map(item => {
						return (
							<li className="flex flex-col items-center">
								{item.icon}
								<span className="text-12 text-white max-[400px]:hidden ">{item.name}</span>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
