import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import heroI from "../../assets/hero-img01.avif";
import heroI2 from "../../assets/woman-leaving-car.jpg";
import heroI3 from "../../assets/young-businessman.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
	const slides = [heroI3, heroI2, heroI];

	return (
		<div className="relative">
			<div>
				<Swiper
					autoplay={{
						delay: 8000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					slidesPerView={1}>
					{slides.map(slide => {
						return (
							<SwiperSlide key={slide}>
								<div style={{ backgroundImage: `url(${slide})` }} className="mt-[5rem] h-[600px] w-full object-fit bg-center bg-no-repeat bg-cover brightness-50"></div>
							</SwiperSlide>
						);
					})}
					{/* href="#Contact" */}
				</Swiper>
				<div className="max-w-[540px] absolute z-10 bottom-[20%] left-[6%]">
					<h2 className="font-taviraj text-24 sm:text-36 text-white">Contact us now for our professional chauffeur services</h2>
					<Link to={"/booking"} className="mt-8 px-4 py-2 inline-block text-20 font-mulish font-semibold text-[#171717] bg-[#D7B65C] hover:bg-[#dfab1c] hover:scale-[1.1] duration-300 ">
						Book Now
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
