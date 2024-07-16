import axios from "axios";
import config from "../../config/config.json";

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
	}[];
	dt_txt: any;
}

export interface WeatherDataUIProps {
	onNewSearch: (search: string) => void;
}

export const setApiParams = {
	appid: import.meta.env.VITE_REACT_APP_API_KEY || ``,
	units: "metric",
};

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
