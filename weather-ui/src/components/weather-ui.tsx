import "../styles/weather-ui.css";
import Header from "../lib/header/components/header.tsx";
import Sidebar from "./sideBar.tsx";
import WeatherDataUI from "./weatherData/weather-data-ui.tsx";
import { useEffect, useState } from "react";

const WeatherUi: React.FC = () => {
	const [recentSearches, setRecentSearches] = useState<string[]>(() => {
		const loadedSearches = localStorage.getItem("recentSearches");
		return loadedSearches ? JSON.parse(loadedSearches) : [];
	});
	const [locationEnabled, setLocationEnabled] = useState<boolean>(false);

	navigator.geolocation.getCurrentPosition(
		() => setLocationEnabled(true),
		() => setLocationEnabled(false),
	);

	useEffect(() => {
		const loadedSearches = localStorage.getItem("recentSearches");
		if (loadedSearches) {
			setRecentSearches(JSON.parse(loadedSearches));
		}
	}, []);

	const handleNewSearch = (search: string) => {
		const newSearches = [search, ...recentSearches].slice(0, 12);
		setRecentSearches(newSearches);
		localStorage.setItem("recentSearches", JSON.stringify(newSearches));
	};

	return (
		<>
			<div className="ui-container" data-testid="ui-container">
				<div className="ui-header-container" data-testid="header-ui">
					<Header />
				</div>
				<div className="ui-sidebar-container" data-testid="sidebar-ui">
					<Sidebar recentSearches={recentSearches} locationEnabled={locationEnabled} />
				</div>
				<div className="ui-weather-data-container" data-testid="weather-data-ui">
					<WeatherDataUI onNewSearch={handleNewSearch} />
				</div>
			</div>
		</>
	);
};

export default WeatherUi;
