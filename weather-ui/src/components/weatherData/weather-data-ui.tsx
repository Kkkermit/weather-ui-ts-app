import React, { useState, useEffect } from "react";
import "../../styles/weather-data-ui.css";
import { WeatherData, WeatherDataUIProps, fetchWeatherDataFromApi, fetchWeatherDataFromCordsApi } from "./weather-data";
import { i18n } from "../../i18n/index";
import { getWeatherIcon } from "./weather-icons";

const WeatherDataUI: React.FC<WeatherDataUIProps> = ({ onNewSearch }) => {
	const [inputLocation, setInputLocation] = useState("");
	const [submittedLocation, setSubmittedLocation] = useState("");
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [recentSearches, setRecentSearches] = useState<string[]>([]);
	const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

	const setDefaultLocation = "London";

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

	const fetchWeatherData = async (location: string) => {
		try {
			const data = await fetchWeatherDataFromApi(location);
			setWeatherData(data);
			setError(null);
		} catch (error) {
			setError(i18n.t("weather.errors.unableToFindLocation"));
		}
	};

	const fetchWeatherDataByCoords = async (lat: number, lon: number) => {
		try {
			const data = await fetchWeatherDataFromCordsApi(lat, lon);
			setWeatherData(data);
			setError(null);
		} catch (error) {
			setError(i18n.t("weather.errors.unableToFindLocation"));
		}
	};

	const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputLocation(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setSubmittedLocation(inputLocation);

		const newSearches = [inputLocation, ...recentSearches].slice(0, 8);
		setRecentSearches(newSearches);
		localStorage.setItem("recentSearches", JSON.stringify(newSearches));
		onNewSearch(inputLocation);
	};

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
							<h3 className="weather-data-header-description"> - {weatherData.weather[0].description}- </h3>
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
								{i18n.t("weather.sunrise")}: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5)}
							</p>
							<p className="weather-data-para">
								{i18n.t("weather.sunset")}: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().slice(0, 5)}
							</p>
						</article>
					)}
				</div>
			</div>
		</>
	);
};

export default WeatherDataUI;
