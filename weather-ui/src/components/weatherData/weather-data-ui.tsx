import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/weather-data-ui.css";
import config from "../../config/config.json";
import { WeatherData } from "./weather-data";

interface WeatherDataUIProps {
	onNewSearch: (search: string) => void;
}

const WeatherDataUI: React.FC<WeatherDataUIProps> = ({ onNewSearch }) => {
	const [inputLocation, setInputLocation] = useState("");
	const [submittedLocation, setSubmittedLocation] = useState("");
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [recentSearches, setRecentSearches] = useState<string[]>([]);
	const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

	useEffect(() => {
		const loadedSearches = localStorage.getItem("recentSearches");
		if (loadedSearches) {
			setRecentSearches(JSON.parse(loadedSearches));
		}
	}, []);

	useEffect(() => {
		if (submittedLocation !== "") {
			fetchWeatherData(submittedLocation);
		} else if (coords) {
			fetchWeatherDataByCoords(coords.lat, coords.lon);
		} else {
			navigator.geolocation.getCurrentPosition((position) => {
				setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
			});
		}
	}, [submittedLocation, coords]);

	const fetchWeatherData = async (location: string) => {
		try {
			const response = await axios.get<WeatherData>(`${config.apiUrl}`, {
				params: {
					q: location,
					appid: import.meta.env.VITE_REACT_APP_API_KEY || ``,
					units: "metric",
				},
			});

			setWeatherData(response.data);
			setError(null);
		} catch (error) {
			setError("Unable to search location. Please check spelling and try again.");
		}
	};

	const fetchWeatherDataByCoords = async (lat: number, lon: number) => {
		try {
			const response = await axios.get<WeatherData>(`${config.apiUrl}`, {
				params: {
					lat,
					lon,
					appid: import.meta.env.VITE_REACT_APP_API_KEY || ``,
					units: "metric",
				},
			});

			setWeatherData(response.data);
			setError(null);
		} catch (error) {
			setError("Unable to get location. Please check your device settings.");
		}
	};

	const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputLocation(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setSubmittedLocation(inputLocation);

		const newSearches = [inputLocation, ...recentSearches].slice(0, 5);
		setRecentSearches(newSearches);
		localStorage.setItem("recentSearches", JSON.stringify(newSearches));
		onNewSearch(inputLocation);
	};

	if (!weatherData)
		return (
			<div className="weather-data-ui-container-error">
				<div className="weather-data-ui-error">
					<h1 className="weather-data-error-text">Error Fetching Data</h1>
					<p className="weather-data-error-para">Unable to fetch data from the API</p>
				</div>
			</div>
		);

	return (
		<>
			<div className="weather-data-ui-container">
				<div className="weather-data-ui">
					<section className="weather-data">
						<div className="weather-data-input-container">
							<h1 className="weather-data-location-text">Enter location</h1>
							<form className="weather-data-form" onSubmit={handleSubmit}>
								<input
									className="weather-data-input"
									type="text"
									value={inputLocation}
									onChange={handleLocationChange}
									placeholder="Location"
								/>
								<button className="weather-data-search-button" type="submit">
									Search
								</button>
							</form>
						</div>
					</section>
					{error ? (
						<article>
							<h1 className="weather-data-error-text">Could not fetch data</h1>
							<p className="weather-data-error-para">{error}</p>
						</article>
					) : (
						<article className="weather-data-article">
							<h2 className="weather-data-header">{weatherData.name}</h2>
							<h3 className="weather-data-header">{weatherData.weather[0].description}</h3>
							<p className="weather-data-para">{weatherData.main.temp}°C</p>
							<p className="weather-data-para">
								Temp Range: {weatherData.main.temp_min}°C - {weatherData.main.temp_max}°C
							</p>
							<p className="weather-data-para">
								Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5)}
							</p>
							<p className="weather-data-para">
								Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().slice(0, 5)}
							</p>
						</article>
					)}
				</div>
			</div>
		</>
	);
};

export default WeatherDataUI;
