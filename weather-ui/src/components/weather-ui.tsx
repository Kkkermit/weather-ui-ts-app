import "../styles/weather-ui.css";
import Header from "../lib/header/components/header";

function WeatherUi() {
	return (
		<>
			<div className="ui-container">
				<div className="ui-header-container">
					<Header />
				</div>
			</div>
		</>
	);
}

export default WeatherUi;
