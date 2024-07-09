export interface WeatherData {
	name: string;
	weather: { description: string }[];
	main: { temp: number; temp_min: number; temp_max: number; humidity: number };
	sys: { sunrise: number; sunset: number };
}

export interface WeatherDataUIProps {
	onNewSearch: (search: string) => void;
}

export const setApiParams = {
	appid: import.meta.env.VITE_REACT_APP_API_KEY || ``,
	units: "metric",
};
