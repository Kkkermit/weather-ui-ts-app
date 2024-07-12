import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import WeatherDataUI from "./weather-data-ui";
import { fetchWeatherDataFromApi } from "./weather-data";

jest.mock("./weather-data", () => ({
	...jest.requireActual("./weather-data"),
	fetchWeatherDataFromApi: jest.fn().mockImplementation((location) => {
		if (location === "London") {
			return Promise.resolve({
				coord: { lon: -0.1257, lat: 51.5085 },
				weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }],
				base: "stations",
				main: {
					temp: 13.97,
					feels_like: 13.97,
					temp_min: 13.22,
					temp_max: 14.44,
					pressure: 1012,
					humidity: 77,
				},
				visibility: 10000,
				wind: { speed: 4.12, deg: 0 },
				clouds: { all: 75 },
				dt: 1632946183,
				sys: {
					type: 2,
					id: 2019646,
					country: "GB",
					sunrise: 1632921669,
					sunset: 1632963416,
				},
				timezone: 3600,
				id: 2643743,
				name: "London",
				cod: 200,
			});
		}
		return Promise.resolve({});
	}),
}));

describe("WeatherDataUI", () => {
	beforeEach(() => {
		render(<WeatherDataUI onNewSearch={() => {}} />);
	});

	it("should render the weather data ui", () => {
		const uiContainer = screen.getByTestId("ui-container");
		expect(uiContainer).toBeInTheDocument();
	});

	it("should render the input field", () => {
		const inputField = screen.getByTestId("input-field");
		expect(inputField).toBeInTheDocument();
	});

	it("should render the submit button", () => {
		const submitButton = screen.getByTestId("submit-button");
		expect(submitButton).toBeInTheDocument();
	});

	it("should update the input field value when typing", () => {
		const inputField = screen.getByTestId("input-field");
		fireEvent.change(inputField, { target: { value: "London" } });
		expect(inputField.value).toBe("London");
	});
});
