import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const clientTestimonials = [
	{ name: "Bob Smith", Comment: "Exceeded my expectations with their impeccable service. The chauffeur was not only punctual but also exhibited a high level of professionalism, making my journey both comfortable and stress-free." },
	{ name: "Marissa Don", Comment: "Highly recommend this chauffeur service, I had an enjoyable ride." },
	{ name: "Frank Gavin", Comment: "A True gem in the world of transportation. I felt like a valued customer." },
	{ name: "Lindsey Schmitt", Comment: "Exceptional service and attention to detail. The chauffeur went above and beyond to ensure a smooth ride, making me feel like a VIP. If you're looking for a reliable and classy driving service, chauffeur is the way to go." },
];

function CustomerTestimonials() {
	return (
		<section className="mt-40">
			<div className="flex flex-col items-center">
				<span id="Reviews" className="pt-[6rem] font-taviraj text-16 font-semibold italic text-[#D7B65C] border-b border-[#D7B65C]">
					Reviews
				</span>

				<h4 className="mt-4 text-center font-taviraj font-medium color-[#171717] text-28 min-[350px]:text-28">Client Testimonials</h4>
			</div>
			<Swiper
				style={{
					height: "400px",
				}}
				direction="vertical"
				autoplay={{
					delay: 5000,
				}}
				modules={[Autoplay]}
				pagination={{ clickable: true }}
				slidesPerView={1}>
				{clientTestimonials.map(testimonial => {
					return (
						<SwiperSlide key={testimonial.name}>
							<div className="mt-10 mx-auto max-w-[450px] flex flex-col items-center">
								<FaQuoteLeft size={"2.2rem"} color="#D7B65C" />
								<span className="mt-10 font-mulish font-black text-18">{testimonial.name}</span>
								<p className="mt-6 mx-auto text-center text-20 font-mulish font-regular italic ">{testimonial.Comment}</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default CustomerTestimonials;
