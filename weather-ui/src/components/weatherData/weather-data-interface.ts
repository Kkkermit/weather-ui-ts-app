export interface WeatherData {
	name: string;
	weather: { description: string }[];
	main: { temp: number; temp_min: number; temp_max: number; humidity: number };
	sys: { sunrise: number; sunset: number };
}

export interface ForecastData {
	list: any;
	dt: number;
	main: {
		temp: number;
	};
	weather: {
		description: string;
		icon: any;
	}[];
	dt_txt: any;
}

export function getWeatherDescription(weatherData: WeatherData, forecastData: ForecastData) {
	return {
		currentWeather: weatherData.weather[0].description,
		forecastWeather: forecastData.weather[0].description,
	};
}
