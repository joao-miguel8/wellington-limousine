import Nav from "../Nav";
import { MdMenu } from "react-icons/md";
import logo from "../../assets/wellingtonLimousineLogo.png";

function Header({ isMenuClosed, setIsMenuClosed }: { isMenuClosed: boolean; setIsMenuClosed: (boolVal: boolean) => void }) {
	return (
		<div>
			<header className="px-4 sm:pl-10 h-[5rem] w-full z-20 top-0 fixed flex items-center justify-between bg-[#171717]">
				<button onClick={() => setIsMenuClosed(true)} className="mr-8 text-white hover:text-[#D7B65C] hover:duration-200">
					<MdMenu size={"1.8rem"} />
				</button>
				<img src={logo} alt="wellington limousine logo" className="w-40" />
			</header>
			<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
		</div>
	);
}

export default Header;
