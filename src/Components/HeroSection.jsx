const HeroSection = () => {
	return (
		<div className="bg-secondary flex flex-col justify-center items-center">
			<div className="w-2/3 mt-10">
				<p className="text-6xl text-white font-fredoka font-bold">
					Learn French Through French Humor
				</p>
				<p className="text-3xl text-white font-fredoka mt-5">
					If you understand the jokes, you understand the language.
				</p>
			</div>
			<a
				className="px-24 py-2 mt-28 mb-20 shadow-sm shadow-primary rounded-lg text-xl text-white"
				href="#jokes"
				rel="noreferrer"
			>
				Have Fun
			</a>
		</div>
	)
}

export default HeroSection
