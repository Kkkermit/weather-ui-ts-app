import React, { useState, useEffect } from "react";
import "../../styles/weather-data-ui.css";
import {
	ForecastData,
	WeatherData,
	WeatherDataUIProps,
	fetchForecastData,
	fetchWeatherDataFromApi,
	fetchWeatherDataFromCordsApi,
	fetchWeatherForecastFromCoordsApi,
} from "./weather-data";
import { i18n } from "../../i18n/index";
import { getWeatherIcon } from "./weather-icons";

const WeatherDataUI: React.FC<WeatherDataUIProps> = ({ onNewSearch }) => {
	const [inputLocation, setInputLocation] = useState("");
	const [submittedLocation, setSubmittedLocation] = useState("");
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [recentSearches, setRecentSearches] = useState<string[]>([]);
	const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
	const [forecastData, setForecastData] = useState<ForecastData[]>([]);

	const setDefaultLocation = "London";

	// Load recent searches useEffect
	useEffect(() => {
		const loadedSearches = localStorage.getItem("recentSearches");
		if (loadedSearches) {
			setRecentSearches(JSON.parse(loadedSearches));
		}
	}, []);

	// Fetch weather data useEffect
	useEffect(() => {
		if (submittedLocation !== "") {
			fetchWeatherData(submittedLocation);
		} else if (coords) {
			fetchWeatherDataByCoords(coords.lat, coords.lon);
		} else {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
				},
				() => {
					fetchWeatherData(setDefaultLocation);
				},
			);
		}
	}, [submittedLocation, coords]);

	// Fetch weather forecast data useEffect
	useEffect(() => {
		if (submittedLocation !== "") {
			fetchWeatherForecast(submittedLocation);
		} else if (coords) {
			fetchWeatherForecastByCoords(coords.lat, coords.lon);
		} else {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
				},
				() => {
					fetchWeatherForecast(setDefaultLocation);
				},
			);
		}
	}, [submittedLocation, coords]);

	// Set default location if permission denied
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(_position) => {},
				(error) => {
					if (error.code === error.PERMISSION_DENIED) {
						setInputLocation(setDefaultLocation);
					}
				},
			);
		} else {
			setInputLocation(setDefaultLocation);
		}
	}, []);

	// Fetch weather data function
	const fetchWeatherData = async (location: string) => {
		try {
			const data = await fetchWeatherDataFromApi(location);
			setWeatherData(data);
			setError(null);
		} catch (error) {
			setError(i18n.t("weather.errors.unableToFindLocation"));
		}
	};

	// Fetch weather forecast data function
	const fetchWeatherForecast = async (location: string) => {
		try {
			const data = await fetchForecastData(location);
			setForecastData(data);
		} catch (error) {
			setError(i18n.t("weather.errors.unableToFindLocation"));
		}
	};

	// Fetch weather data by coordinates function
	const fetchWeatherDataByCoords = async (lat: number, lon: number) => {
		try {
			const data = await fetchWeatherDataFromCordsApi(lat, lon);
			setWeatherData(data);
			setError(null);
		} catch (error) {
			setError(i18n.t("weather.errors.unableToFindLocation"));
		}
	};

	// Fetch weather forecast data by coordinates function
	const fetchWeatherForecastByCoords = async (lat: number, lon: number) => {
		try {
			const data = await fetchWeatherForecastFromCoordsApi(lat, lon);
			setForecastData(data);
		} catch (error) {
			setError(i18n.t("weather.errors.unableToFindLocation"));
		}
	};

	// Handle location change function
	const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputLocation(event.target.value);
	};

	// Handle submit function
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setSubmittedLocation(inputLocation);

		// Update recent searches
		const newSearches = [inputLocation, ...recentSearches].slice(0, 12);
		setRecentSearches(newSearches);
		// Save recent searches to local storage
		localStorage.setItem("recentSearches", JSON.stringify(newSearches));
		onNewSearch(inputLocation);

		// Reset input field
		setInputLocation("");
	};

	// Display if weatherData is not received
	if (!weatherData)
		return (
			<div className="weather-data-ui-container-error">
				<div className="weather-data-ui-error">
					<h1 className="weather-data-error-text">{i18n.t("weather.errors.fetchingData")}</h1>
					<p className="weather-data-error-para">{i18n.t("weather.errors.unableToFetchData")}</p>
				</div>
			</div>
		);

	return (
		<>
			<div className="weather-data-ui-container" data-testid="ui-container">
				<div className="weather-data-ui">
					<section className="weather-data">
						<div className="weather-data-input-container">
							<h1 className="weather-data-location-text">{i18n.t("weather.title")}</h1>
							<form className="weather-data-form" onSubmit={handleSubmit}>
								<input
									className="weather-data-input"
									type="text"
									value={inputLocation}
									onChange={handleLocationChange}
									placeholder={i18n.t("weather.placeholder")}
									data-testid="input-field"
								/>
								<button className="weather-data-search-button" type="submit" data-testid="submit-button">
									{i18n.t("weather.search")}
								</button>
							</form>
						</div>
					</section>
					{error ? (
						<article>
							<h1 className="weather-data-error-text">{i18n.t("weather.errors.fetchingData")}</h1>
							<p className="weather-data-error-para">{error}</p>
						</article>
					) : (
						<>
							<section className="current-weather">
								<article className="weather-data-article">
									<h2 className="weather-data-header-text">
										{i18n.t("weather.weatherIn")} {weatherData.name}
									</h2>
									<div className="weather-icon-container">
										<img
											className="weather-icon"
											src={getWeatherIcon(weatherData.weather[0].description)}
											alt="Weather Icon"
										/>
									</div>
									<h3 className="weather-data-header-description"> - {weatherData.weather[0].description} -</h3>
									<p className="weather-data-para">
										{i18n.t("weather.temp")}: {weatherData.main.temp}°C
									</p>
									<p className="weather-data-para">
										{i18n.t("weather.temperature")}: {weatherData.main.temp_min}°C - {weatherData.main.temp_max}°C
									</p>
									<p className="weather-data-para">
										{i18n.t("weather.humidity")}: {weatherData.main.humidity}
									</p>
									<p className="weather-data-para">
										{i18n.t("weather.sunrise")}:{" "}
										{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5)}
									</p>
									<p className="weather-data-para">
										{i18n.t("weather.sunset")}:{" "}
										{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().slice(0, 5)}
									</p>
								</article>
							</section>
							<section className="future weather">
								<article className="weather-future-data">
									<div className="weather-future-container">
										<div className="weather-future-inner-container">
											<div className="weather-future-text">
												<h1 className="weather-future-heading-text">Weather Forecast</h1>
											</div>
											<div className="weather-forecast-data-container">
												{Array.isArray(forecastData) &&
													forecastData.map((forecast, index) => (
														<div className="weather-forecast-data" key={index}>
															<p className="weather-forecast-para">
																Date: {new Date(forecast.dt * 1000).toLocaleDateString()}
															</p>
															<p className="weather-forecast-para">Time: {forecast.dt_txt.split(" ")[1].slice(0, 5)}</p>
															<p className="weather-forecast-para">Temperature: {forecast.main.temp}°C</p>
															<p className="weather-forecast-para">Description: {forecast.weather[0].description}</p>
														</div>
													))}
											</div>
										</div>
									</div>
								</article>
							</section>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default WeatherDataUI;
