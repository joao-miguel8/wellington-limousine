import { MdOutlineMail } from "react-icons/md";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Nav({ isMenuClosed, setIsMenuClosed }: { isMenuClosed: boolean; setIsMenuClosed: (boolVal: boolean) => void }) {
	const menuItems = ["About", "Services", "Reviews", "Contact"];

	return (
		<>
			<div className={`${!isMenuClosed ? "-translate-y-full" : "translate-y-0"} ease-in-out transition duration-500 absolute z-100 flex w-full h-screen bg-[#171717]`}>
				<nav className=" w-full h-full flex flex-col justify-center">
					<button onClick={() => setIsMenuClosed(false)} className="absolute top-6 right-6 hover:text-[#D7B65C] text-white hover:duration-200">
						<IoIosCloseCircleOutline size={"2.4rem"} />
					</button>
					<ul className="flex flex-col gap-6 items-center justify-start w-fit mx-auto">
						{menuItems.map(item => {
							return (
								<li key={item}>
									<a href="#">
										<p className="font-mulish text-28 font-black sm:text-40 text-white hover:text-[#D7B65C] duration-500 hover:scale-75">{item}</p>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Nav;
