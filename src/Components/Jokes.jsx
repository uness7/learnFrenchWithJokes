import { useEffect, useState } from 'react'

const apiKey = import.meta.env.VITE_API_KEY

const Jokes = () => {
	const [data, setData] = useState('')
	const [type, setType] = useState('global')
	// const [bgColor, setBgColor] = useState(null)

	useEffect(() => {
		requestJokes()
	}, [type]) // eslint-disable-line react-hooks/exhaustive-deps

	async function requestJokes() {
		fetch(`https://www.blagues-api.fr/api/type/${type}/random`, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			}, // process.env.REACT_APP_API_KEY
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data)
			})
	}

	async function copyJoke() {
		const joke = data.joke + ' ' + data.answer
		try {
			await navigator.clipboard.writeText(joke)
			// console.log('Text copied to clipboard')
		} catch (error) {
			console.error('Unable to copy text: ', error)
		}
	}

	// function handleBgColor() {
	// 	setBgColor('bg-primary')
	// }

	return (
		<div id="jokes">
			<div className="flex justify-evenly text-center text-xl text-black mt-24">
				<div className="flex gap-x-10 justify-evenly">
					<button
						onClick={(e) => {
							e.preventDefault()
							setType('dev')
						}}
						className="px-5 py-2 bg-accent text-white rounded-xl"
					>
						Dev
					</button>
					<button
						onClick={(e) => {
							e.preventDefault()
							setType('blondes')
						}}
						className="px-5 py-2 bg-accent text-white rounded-xl"
					>
						Blondes
					</button>
					<button
						onClick={(e) => {
							e.preventDefault()
							setType('beauf')
						}}
						className="px-5 py-2 bg-accent text-white rounded-xl"
					>
						La beauf
					</button>
					<button
						onClick={(e) => {
							e.preventDefault()

							setType('global')
						}}
						className="px-5 py-2 bg-accent text-white rounded-xl"
					>
						Global
					</button>
					<button
						onClick={(e) => {
							e.preventDefault()

							setType('limit')
						}}
						className="px-5 py-2 bg-accent text-white rounded-xl"
					>
						Adulte
					</button>
					<button
						onClick={(e) => {
							e.preventDefault()

							setType('dark')
						}}
						className="px-5 py-2 bg-accent text-white rounded-xl"
					>
						Dark
					</button>
				</div>
			</div>

			<div className="mt-4 w-2/3 h-72 rounded-xl mx-auto bg-primary flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center">
					<p className="w-full px-5 text-2xl text-white text-center">
						{data.joke}
						{data.answer}
					</p>
					<div className="space-x-5 mt-20">
						<button
							onClick={(e) => {
								e.preventDefault()
								copyJoke()
							}}
							className="px-5 py-1 text-center bg-secondary rounded-xl text-white hover:bg-blue-500"
						>
							copy
						</button>
						<button className="px-5 py-1  text-center bg-secondary rounded-xl text-white hover:bg-blue-500">
							share
						</button>
						<button
							onClick={(e) => {
								e.preventDefault()

								requestJokes()
							}}
							className="px-5 py-1 bg-secondary rounded-xl text-white hover:bg-blue-500"
						>
							More
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Jokes

/* 
	/api/random
	/api/type/:type:/random // type: global, dev, dark, limit, beauf, blondes
	/api/type/:type:/random // type: global, dev, dark, limit, beauf, blondes
	/api/count
	/api/random?disallow=dark
	/api/random?disallow=dark&disallow=limit&disallow=dev
*/
