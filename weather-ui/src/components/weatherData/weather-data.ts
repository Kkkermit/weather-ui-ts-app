import axios from "axios";
import config from "../../config/config.json";
import { ForecastData, WeatherData } from "./weather-data-interface";
import { setApiParams } from "./api/api-params";

export const fetchWeatherDataFromApi = async (location: string) => {
	const response = await axios.get<WeatherData>(`${config.apiUrl}`, {
		params: {
			q: location,
			...setApiParams,
		},
	});

	return response.data;
};

export const fetchWeatherDataFromCordsApi = async (lat: number, lon: number) => {
	const response = await axios.get<WeatherData>(`${config.apiUrl}`, {
		params: {
			lat,
			lon,
			...setApiParams,
		},
	});

	return response.data;
};

export const fetchForecastData = async (location: string) => {
	const response = await axios.get<ForecastData>(`${config.apiForecastUrl}`, {
		params: {
			q: location,
			...setApiParams,
		},
	});
	return response.data.list;
};

export const fetchWeatherForecastFromCoordsApi = async (lat: number, lon: number) => {
	const response = await axios.get<ForecastData>(`${config.apiForecastUrl}`, {
		params: {
			lat,
			lon,
			...setApiParams,
		},
	});
	return response.data.list;
};
