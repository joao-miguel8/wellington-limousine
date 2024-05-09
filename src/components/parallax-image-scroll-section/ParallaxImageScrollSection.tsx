function ParallaxImageScrollSection() {
	return (
		<div className="mb-28 relative">
			<div className={`h-[30rem] sm:h-[50rem] w-full object-fit bg-no-repeat bg-cover flex justify-center bg-center align-center bg-fixed brightness-50 bg-[url(../src/assets/client-in-backseat-mobile.jpg)] min-[400px]:bg-[url(../src/assets/client-in-backseat.jpg)]`}></div>
			<div className="w-full absolute top-1/2 -translate-y-1/2 ">
				<h2 className="px-2 mx-auto mb-30 font-taviraj max-w-[600px] text-30 min-[400px]:text-38 sm:text-50 md:text-62 text-center text-white">Travel in Quality and Comfort</h2>
			</div>
		</div>
	);
}

export default ParallaxImageScrollSection;
