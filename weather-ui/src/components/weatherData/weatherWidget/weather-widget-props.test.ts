import { getWeatherWidgetProps } from "./weather-widget-props";
import { describe, it, expect } from "vitest";

describe("getWeatherWidgetProps", () => {
	it("should return an object with the given cityId", () => {
		const cityId = 123;
		const result = getWeatherWidgetProps(cityId);
		expect(result).toEqual({ cityId });
	});

	it("should handle null cityId", () => {
		const result = getWeatherWidgetProps(null);
		expect(result).toEqual({ cityId: null });
	});
});
