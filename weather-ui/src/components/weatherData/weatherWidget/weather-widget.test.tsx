import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import WeatherWidget from "./weather-widget";
import { unmountComponentAtNode } from "react-dom";

let container: any = null;

describe("WeatherWidget", () => {
	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it("should create and remove scripts on mount and unmount", () => {
		act(() => {
			render(<WeatherWidget cityId={123} />, container);
		});

		expect(
			document.querySelector('script[src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js"]'),
		).not.toBeNull();
		expect(
			document.querySelector(
				'script[src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"]',
			),
		).not.toBeNull();

		act(() => {
			render(<></>, container);
		});

		// Check if scripts are removed
		expect(
			document.querySelector('script[src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js"]'),
		).toBeNull();
		expect(
			document.querySelector(
				'script[src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"]',
			),
		).toBeNull();
	});
});
