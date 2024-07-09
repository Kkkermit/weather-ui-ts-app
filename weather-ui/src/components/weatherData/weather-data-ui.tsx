import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/weather-data-ui.css";

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
			const response = await axios.get<WeatherData>("http://api.openweathermap.org/data/2.5/weather", {
				params: {
					q: submittedLocation,
					appid: "79f34889d4272cd404d963997ffaf29a",
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

	if (!weatherData) return <div>Loading...</div>;

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
