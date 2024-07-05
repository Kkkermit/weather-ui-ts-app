import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import WeatherUi from "./components/weather-ui";
import Background from "./lib/background/components/background";

function App() {
	return (
		<>
			<div className="container" data-testid="weather-ui">
				<Background />
				<Router>
					<Routes>
						<Route path="/" element={<WeatherUi />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
