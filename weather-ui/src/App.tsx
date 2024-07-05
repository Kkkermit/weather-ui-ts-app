import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import WeatherUi from "./components/weather-ui";

function App() {
	return (
		<>
			<div className="container">
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
