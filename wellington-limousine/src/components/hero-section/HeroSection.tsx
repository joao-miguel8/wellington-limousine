import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
			modules={[Navigation, Pagination, Autoplay]}
			navigation
			pagination={{ clickable: true }}
			slidesPerView={1}>
			{slides.map(slide => {
				return (
					<SwiperSlide key={slide}>
						<div style={{ backgroundImage: `url(${slide})` }} className="h-[600px] w-full bg-center bg-cover "></div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default HeroSection;
