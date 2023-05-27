import { useEffect, useState } from 'react'

const OPTIONS = ['global', 'dev', 'dark', 'limit', 'beauf', 'blondes']
const apiKey = import.meta.env.VITE_API_KEY

const Jokes = () => {
	const [data, setData] = useState('')
	const [type, setType] = useState(OPTIONS[0])

	useEffect(() => {
		requestJokes()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

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
			console.log('Text copied to clipboard')
		} catch (error) {
			console.error('Unable to copy text: ', error)
		}
	}

	return (
		<div id="jokes">
			<div className="text-center text-2xl text-white font-bold mt-24">
				<h1>Pick a theme, and have a laugh</h1>
			</div>
			<div className="h-128 w-2/3 m-auto mt-24 bg-primary px-4  py-4 my-12 flex flex-row justify-between gap-x-8 text-xl font-roboto font-normal text-white rounded-2xl">
				<div className="w-1/2 h-2/3 p-2 border-2 border-white rounded-xl">
					<form
						onSubmit={(e) => {
							e.preventDefault()
							requestJokes()
						}}
						className="h-full flex flex-col gap-y-16 justify-center items-center"
					>
						<label htmlFor="type" className="text-center">
							<select
								className="bg-secondary w-48 block shadow-sm shadow-primary rounded-lg py-2 text-center"
								id="type"
								value={type}
								onChange={(e) => {
									setType(e.target.value)
								}}
							>
								{OPTIONS.map((item) => {
									return (
										<option
											className="px-20 text-center"
											key={item}
										>
											{item}
										</option>
									)
								})}
							</select>
						</label>
						<button
							className="bg-secondary w-48 shadow-sm shadow-primary rounded-lg py-2"
							type="submit"
						>
							Another one!
						</button>
					</form>
				</div>
				<div className="w-2/3 h-2/3 px-4 text-center flex flex-col gap-y-20 items-center border-2 border-white rounded-xl">
					<div className="place-self-end">
						<button
							className="mt-4 mr-4 px-3 py-1 rounded-lg bg-secondary"
							onClick={copyJoke}
						>
							copy
						</button>
					</div>
					<div className="mt-3">
						<p>{data.joke}</p>
						<p>{data.answer}</p>
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
