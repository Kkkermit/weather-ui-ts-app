import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WeatherMap from "./weather-map";

describe("renders without crashing", async () => {
	render(<WeatherMap lat={51.505} lon={-0.09} />);

	it("should render the map container", () => {
		const mapContainer = screen.getByTestId("weather-map-div");
		expect(mapContainer).toBeInTheDocument();
	});
});
