import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "../assets/wellingtonLimousineLogo.png";
import { Link } from "react-router-dom";

function Nav({ isMenuClosed, setIsMenuClosed }: { isMenuClosed: boolean; setIsMenuClosed: (boolVal: boolean) => void }) {
	// const menuItems = ["About", "Services", "Reviews", "Contact"];

	const menuItems = [
		{ label: "Home", link: "/" },
		{ label: "Our Services", link: "/services" },
		{ label: "About Us", link: "/about" },
	];

	return (
		<>
			<div className={`${!isMenuClosed ? "-translate-x-full" : "translate-x-0"} ease-in-out transition duration-500 top-0 fixed z-50 flex w-full min-[400px]:w-[310px] h-screen bg-[#171717]`}>
				<nav className="sm:ml-8 w-full h-full flex flex-col ">
					<div className="mt-8 mx-8 pb-4 flex justify-between items-center max-[400px]:border-b-[0.5px] border-[#e8e8e8]">
						<img src={logo} alt="wellington limousine logo" className="w-32 sm:w-36 min-[400px]:opacity-0" />
						<button onClick={() => setIsMenuClosed(false)} className="top-4 right-8 hover:text-[#D7B65C] text-white hover:duration-200">
							<IoIosCloseCircleOutline size={"2.0rem"} />
						</button>
					</div>
					<ul className="ml-10 mt-10 w-fit">
						{menuItems.map(({ label, link }) => {
							return (
								<li onClick={() => setIsMenuClosed(false)} key={label}>
									<Link to={`${link}`}>
										<p className="mb-10 font-mulish text-18 font-black text-white hover:text-[#D7B65C] duration-500">{label}</p>
									</Link>
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
