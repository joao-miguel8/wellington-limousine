import { MdOutlineMail } from "react-icons/md";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "../assets/wellingtonLimousineLogo.png";

function Nav({ isMenuClosed, setIsMenuClosed }: { isMenuClosed: boolean; setIsMenuClosed: (boolVal: boolean) => void }) {
	const menuItems = ["About", "Services", "Reviews", "Contact"];

	return (
		<>
			<div className={`${!isMenuClosed ? "-translate-x-full" : "translate-x-0"} ease-in-out transition duration-500 top-0 fixed z-50 flex w-full h-screen bg-[#171717]`}>
				<nav className="sm:ml-8 w-full h-full flex flex-col ">
					<div className="mt-8 mx-8 pb-4 flex justify-between items-center border-b-2">
						<img src={logo} alt="wellington limousine logo" className="w-32 sm:w-52" />
						<button onClick={() => setIsMenuClosed(false)} className="top-4 right-8 hover:text-[#D7B65C] text-white hover:duration-200">
							<IoIosCloseCircleOutline size={"2.4rem"} />
						</button>
					</div>
					<ul className="mx-auto min-[250px]:ml-10 mt-10 w-fit">
						{menuItems.map(item => {
							return (
								<li key={item}>
									<a href={`#${item}`}>
										<p className="mb-10 font-mulish text-28 font-black sm:text-34 text-white hover:text-[#D7B65C] duration-500 hover:scale-75">{item}</p>
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
