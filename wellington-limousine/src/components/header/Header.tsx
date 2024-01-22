import React from "react";
import Nav from "../Nav";
import { MdMenu } from "react-icons/md";

function Header({ isMenuClosed, setIsMenuClosed }: { isMenuClosed: boolean; setIsMenuClosed: (boolVal: boolean) => void }) {
	return (
		<div>
			<header className="h-16 w-full top-0 fixed flex items-center justify-end bg-[#171717]">
				<button onClick={() => setIsMenuClosed(true)} className="mr-8 text-white hover:text-[#D7B65C] hover:duration-200">
					<MdMenu size={"1.8rem"} />
				</button>
			</header>
			<Nav isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
		</div>
	);
}

export default Header;
