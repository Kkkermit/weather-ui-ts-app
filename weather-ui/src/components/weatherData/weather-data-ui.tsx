import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/weather-data-ui.css";
import config from "../../config/config.json";

interface WeatherData {
	name: string;
	weather: { description: string }[];
	main: { temp: number };
}

const WeatherDataUI: React.FC = () => {
	const [inputLocation, setInputLocation] = useState("");
	const [submittedLocation, setSubmittedLocation] = useState("London");
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

	useEffect(() => {
		const fetchWeatherData = async () => {
			const response = await axios.get<WeatherData>(`${config.apiUrl}`, {
				params: {
					q: submittedLocation,
					appid: import.meta.env.VITE_REACT_APP_API_KEY || ``,
					units: "metric",
				},
			});

			setWeatherData(response.data);
		};

		fetchWeatherData();
	}, [submittedLocation]);

	const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputLocation(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setSubmittedLocation(inputLocation);
	};

	if (!weatherData)
		return (
			<div className="weather-data-ui-container-error">
				<div className="weather-data-ui-error">
					<h1 className="weather-data-error-text">Error Fetching Data</h1>
					<p className="weather-data-error-para">Please check you've entered the correct location</p>
				</div>
			</div>
		);

	return (
		<>
			<div className="weather-data-ui-container">
				<div className="weather-data-ui">
					<section className="weather-data">
						<div className="weather-data-input-container">
							<h1>Enter location</h1>
							<form onSubmit={handleSubmit}>
								<input
									className="weather-data-input"
									type="text"
									value={inputLocation}
									onChange={handleLocationChange}
									placeholder="Location"
								/>
								<button type="submit">Submit</button>
							</form>
						</div>
					</section>
					<article>
						<h2 className="weather-data-header">{weatherData.name}</h2>
						<h3 className="weather-data-header">{weatherData.weather[0].description}</h3>
						<p>{weatherData.main.temp}°C</p>
					</article>
				</div>
			</div>
		</>
	);
};

export default WeatherDataUI;
