import { screen, render } from "@testing-library/react";
import WeatherUi from "./weather-ui";
import { describe, it, expect, beforeEach } from "vitest";
import { jest } from "@jest/globals";

describe("WeatherUi", () => {
	beforeEach(() => {
		const mockGeolocation = {
			getCurrentPosition: jest.fn().mockImplementation((success: any) =>
				success({
					coords: {
						latitude: 51.1,
						longitude: -0.1,
					},
				}),
			),
		};

		Object.defineProperty(global.navigator, "geolocation", {
			value: mockGeolocation,
			writable: true,
		});

		render(<WeatherUi />);
	});

	it("should render the weather ui", () => {
		const uiContainer = screen.getByTestId("ui-container");
		expect(uiContainer).toBeInTheDocument();
	});

	it("should render the header ui", () => {
		const headerUi = screen.getByTestId("header-ui");
		expect(headerUi).toBeInTheDocument();
	});

	it("should render the sidebar ui", () => {
		const sidebarUi = screen.getByTestId("sidebar-ui");
		expect(sidebarUi).toBeInTheDocument();
	});
});
