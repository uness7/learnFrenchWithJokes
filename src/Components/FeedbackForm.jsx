const FeedbackForm = () => {
	return (
		<div className="mt-10 px-20 h-80 bg-secondary flex justify-center items-center">
			<div className="grid grid-cols-2 gap-x-4">
				<div className="ml-32">
					<form className="flex flex-col  gap-y-10">
						<label htmlFor="firstName">
							<input
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="first name"
							/>
						</label>
						<label htmlFor="lastName">
							<input
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="last name"
							/>
						</label>
						<label htmlFor="email">
							<input
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="email"
							/>
						</label>
					</form>
				</div>
				<div className="flex flex-col justify-end items-center text-white text-2xl">
					<p className="text-center">
						We appreciate your opinion, so send us some Feedback, or
						maybe a joke 🤗
					</p>
					<button
						className="px-10 py-2 mt-10 text-lg rounded-lg bg-primary hover:bg-orange-500"
						type="submit"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	)
}

export default FeedbackForm
