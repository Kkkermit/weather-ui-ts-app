export interface WeatherData {
	name: string;
	weather: { description: string }[];
	main: { temp: number; temp_min: number; temp_max: number };
	sys: { sunrise: number; sunset: number };
}
