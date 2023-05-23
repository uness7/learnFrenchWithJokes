// import BlaguesAPI from 'blagues-api'
import { useEffect, useState } from 'react'

const OPTIONS = [
	'choose one',
	'global',
	'dev',
	'dark',
	'limit',
	'beauf',
	'blondes',
]
// const LIMIT = ['choose one', 'Yes', 'No']

const Jokes = () => {
	const [data, setData] = useState('')
	const [type, setType] = useState('')
	// const [islimit, setIsLimit] = useState('')
	// const [limit, setLimit] = useState('')

	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTA5NjIxODM2NjYxMzY1OTcwOSIsImxpbWl0IjoxMDAsImtleSI6Imhyc2drd3g5TFVrd1NrbGg0VlkzZ1BFTTB4SW9NZ3AwN0Zoakg2azNNQ2VSSk5Pc21OIiwiY3JlYXRlZF9hdCI6IjIwMjMtMDUtMjNUMDY6MTY6MjUrMDA6MDAiLCJpYXQiOjE2ODQ4MjI1ODV9._EWe7T8eZBALP-QdyMqEFIl5XJmYNL9okhyhgfmTtpQ'

	useEffect(() => {
		requestJokes()
	}, [])

	// useEffect(() => {
	// 	if (islimit === 'No') {
	// 		setLimit('?disallow=dark')
	// 	}
	// }, [islimit])

	async function requestJokes() {
		fetch(`https://www.blagues-api.fr/api/type/${type}/random`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data)
			})
	}

	return (
		<div className="h-96 w-2/3 m-auto mt-24 bg-primary px-4  py-4 my-12 flex flex-row justify-between gap-x-8 text-xl font-roboto font-normal text-white rounded-2xl">
			<div className="w-1/2 h-full p-2 border-2 border-white rounded-xl">
				<form
					onSubmit={(e) => {
						e.preventDefault()
						requestJokes()
					}}
					className="h-full flex flex-col justify-evenly items-center gap-y-2"
				>
					<label htmlFor="type" className="text-center">
						Joke Type
						<select
							className="bg-white text-black block px-20 py-1 rounded-sm mt-2"
							id="type"
							value={type}
							onChange={(e) => {
								setType(e.target.value)
							}}
						>
							{OPTIONS.map((item) => {
								return (
									<option className="px-20" key={item}>
										{item}
									</option>
								)
							})}
						</select>
					</label>
					{/* <label htmlFor="limit" className="text-center">
						Dark Jokes
						<select
							className="bg-white text-black block px-20 py-1 rounded-sm mt-2"
							id="limit"
							value={islimit}
							onChange={(e) => {
								setIsLimit(e.target.value)
							}}
						>
							{LIMIT.map((item) => {
								return <option key={item}>{item}</option>
							})}
						</select>
					</label> */}
					<button
						className="bg-secondary shadow-sm shadow-primary px-20 rounded-lg py-2"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
			<div className="w-2/3 px-4 text-center flex flex-col justify-center items-center border-2 border-white rounded-xl">
				<p>{data.joke}</p>
				<p>{data.answer}</p>
				{/* <p>{data.type}</p> */}
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
