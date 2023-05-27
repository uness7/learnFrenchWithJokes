import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Jokes from '../Components/Jokes'
import Info from '../Components/Info'
import Footer from '../Components/Footer'
import Intro from '../Components/Intro'
import RandomJoke from '../Components/RandomJoke'
import Speech from '../Components/Speech'

const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<Intro />
			<RandomJoke />
			<Speech />
			<Jokes />
			<Info />
			<Footer />
		</div>
	)
}

export default Home
