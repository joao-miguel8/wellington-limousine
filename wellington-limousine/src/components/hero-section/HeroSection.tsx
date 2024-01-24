import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import heroI from "../../assets/hero-img01.avif";
import testimg from "../../assets/sardar-faizan-gpkn6Dk7-oI-unsplash.jpg";

function HeroSection() {
	const slides = [heroI, testimg, heroI];

	return (
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
						<div style={{ backgroundImage: `url(${slide})` }} className="mt-[5rem] h-[600px] w-full object-fit bg-center bg-no-repeat bg-cover"></div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default HeroSection;
