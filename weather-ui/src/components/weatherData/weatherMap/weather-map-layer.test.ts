import { tileLayerParams, weatherMapLayerParams } from "./weather-map-layer";
import { describe, it, expect } from "vitest";

describe("weather-map-layer", () => {
	it("should have the correct tileLayerParams", () => {
		expect(tileLayerParams).toEqual({
			maxZoom: 19,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		});
	});

	it("should have the correct weatherMapLayerParams", () => {
		expect(weatherMapLayerParams).toEqual({
			attribution: "Weather data © OpenWeatherMap",
			layer: "precipitation_new",
			appid: expect.any(String),
		});
	});
});
