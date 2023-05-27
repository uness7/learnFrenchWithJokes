const RandomJoke = () => {
	return (
		<div className="h-128 bg-primary grid grid-cols-2 gap-x-10 relative">
			<div className="bg-secondary h-3/5 my-auto rounded-r-3xl flex justify-center items-center">
				<p className="text-2xl text-white text-center">
					Quels sont les développeurs les plus riches ? Ceux qui
					codent en Ruby. dev
				</p>
			</div>
			<div className="my-auto text-white font-roboto text-xl">
				<p>
					Whether you are a language enthusiast, a fan of French
					culture, or simply seeking a good laugh, our website offers
					a delightful collection of French jokes. Check out this
					radndom one!
				</p>
				<div className="flex justify-center items-center mt-10">
					<button className="px-16 py-2 text-center rounded-xl bg-secondary text-xl">
						More
					</button>
				</div>
			</div>
		</div>
	)
}

export default RandomJoke
