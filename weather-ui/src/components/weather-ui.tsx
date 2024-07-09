import "../styles/weather-ui.css";
import Header from "../lib/header/components/header.tsx";
import Sidebar from "./sideBar.tsx";

function WeatherUi() {
	return (
		<>
			<div className="ui-container" data-testid="ui-container">
				<div className="ui-header-container" data-testid="header-ui">
					<Header />
				</div>
				<div className="ui-sidebar-container" data-testid="sidebar-ui">
					<Sidebar />
				</div>
			</div>
		</>
	);
}

export default WeatherUi;
