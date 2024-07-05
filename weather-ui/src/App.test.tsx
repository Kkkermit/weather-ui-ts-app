import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("renders WeatherUi component for root route", () => {
	render(<App />);
	it("should render the weather ui", () => {
		const weatherUiElement = screen.getByTestId("weather-ui");
		expect(weatherUiElement).toBeInTheDocument();
	});
});
