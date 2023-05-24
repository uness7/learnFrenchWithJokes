import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="h-24 m-auto bg-secondary text-white font-fredoka text-sm font-thin">
			<div className="w-full flex h-full justify-center items-center text-center gap-x-64 cursor-pointer text-2xl">
				<Link to="/support-me">Support me</Link>
				<Link to="/">Home</Link>
				<Link to="about-me">About me</Link>
			</div>
		</div>
	)
}

export default Navbar
