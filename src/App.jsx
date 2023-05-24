import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import SupportMePage from './Pages/SupportMePage'
import Home from './Pages/Home'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/support-me" element={<SupportMePage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
