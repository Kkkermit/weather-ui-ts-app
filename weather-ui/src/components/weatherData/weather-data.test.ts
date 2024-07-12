import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchWeatherDataFromApi, fetchWeatherDataFromCordsApi } from "./weather-data";

const mock = new MockAdapter(axios);

describe("fetchWeatherDataFromApi", () => {
	it("fetches weather data for a given location", async () => {
		const mockData = {
			name: "London",
			weather: [{ description: "overcast clouds" }],
			main: { temp: 20, temp_min: 15, temp_max: 25, humidity: 80 },
			sys: { sunrise: 1623078400, sunset: 1623132000 },
		};

		mock.onGet().reply(200, mockData);

		const data = await fetchWeatherDataFromApi("London");
		expect(data).toEqual(mockData);
	});
});

describe("fetchWeatherDataFromCordsApi", () => {
	it("fetches weather data for a given latitude and longitude", async () => {
		const mockData = {
			name: "London",
			weather: [{ description: "overcast clouds" }],
			main: { temp: 20, temp_min: 15, temp_max: 25, humidity: 80 },
			sys: { sunrise: 1623078400, sunset: 1623132000 },
		};

		mock.onGet().reply(200, mockData);

		const data = await fetchWeatherDataFromCordsApi(51.5074, 0.1278);
		expect(data).toEqual(mockData);
	});
});
