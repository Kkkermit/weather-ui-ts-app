import { screen, render } from "@testing-library/react";
import WeatherUi from "./weather-ui";
import { describe, it, expect, beforeEach } from "vitest";

describe("WeatherUi", () => {
	beforeEach(() => {
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
