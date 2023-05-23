import { createRoot } from 'react-dom/client'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Jokes from './Jokes'
import Info from './Info'
import Footer from './Footer'

const App = () => {
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

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
