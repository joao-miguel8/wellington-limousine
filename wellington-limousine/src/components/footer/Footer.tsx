import logo from "../../assets/wellingtonLimousineLogo.png";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
	return (
		<footer className="mt-10 border-t border-[#e8e8e8]">
			<div className="p-10">
				<img src={logo} alt="wellington limousine logo" className="mx-auto w-40" />
				<div className="mt-10 sm:flex justify-center gap-4">
					<div className="mt-10 flex-[50%] sm:max-w-[300px] bg-[#171717]">
						<div className="p-4 flex flex-col items-center ">
							<FaLocationDot color="#D7B65C" size={"2.2rem"} />
							<p className="mt-4 max-w-60 text-center font-taviraj text-white">Located in the New york tri-state area</p>
						</div>
					</div>
					<div className="flex flex-col items-center flex-[50%] max-w-[500px] ">
						<p className="mt-10 max-w-[400px] text-center font-mulish">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur corrupti voluptates.</p>
						<button className="mt-10 p-4 bg-[#D7B65C] hover:scale-[1.05] duration-300 font-mulish font-bold">Reach out to us</button>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
