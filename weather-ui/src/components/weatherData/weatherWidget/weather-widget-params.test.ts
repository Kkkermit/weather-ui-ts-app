import { weatherWidgetParams } from "./weather-widget-params";
import { describe, it, expect } from "vitest";

describe("weatherWidgetParams", () => {
	it("should have the correct structure and default values", () => {
		expect(weatherWidgetParams).toEqual({
			id: 11,
			appid: expect.any(String),
			units: "metric",
			containerid: "openweathermap-widget-21",
		});
	});
});
