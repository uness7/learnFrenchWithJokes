import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Jokes from '../Components/Jokes'
import Info from '../Components/Info'
import Footer from '../Components/Footer'

const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<Jokes />
			<Info />
			<Footer />
		</div>
	)
}

export default Home
