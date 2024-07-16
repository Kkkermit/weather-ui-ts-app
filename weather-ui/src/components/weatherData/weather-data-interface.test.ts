import { getWeatherDescription } from "./weather-data-interface";
import { WeatherData, ForecastData } from "./weather-data-interface";
import { describe, expect, it } from "vitest";

describe("getWeatherDescription", () => {
	it("should return the correct weather descriptions", () => {
		const mockWeatherData: WeatherData = {
			name: "London",
			weather: [{ description: "cloudy" }],
			main: { temp: 20, temp_min: 15, temp_max: 25, humidity: 80 },
			sys: { sunrise: 1627810200, sunset: 1627863600 },
		};

		const mockForecastData: ForecastData = {
			list: [],
			dt: 1627810200,
			main: { temp: 22 },
			weather: [{ description: "sunny", icon: "01d" }],
			dt_txt: "2021-08-01 12:00:00",
		};

		const result = getWeatherDescription(mockWeatherData, mockForecastData);

		expect(result).toEqual({
			currentWeather: "cloudy",
			forecastWeather: "sunny",
		});
	});
});
