import { render, screen } from "@testing-library/react";
import Header from "./header";
import { describe, it, expect, beforeEach } from "vitest";

describe("Header", () => {
	beforeEach(() => {
		render(<Header />);
	});
	it("should render the header", () => {
		const header = screen.getByTestId("header");
		expect(header).toBeInTheDocument();
	});
	it("should render the header title", () => {
		const headerTitle = screen.getByTestId("header-title");
		expect(headerTitle).toBeInTheDocument();
	});

	it("should render the header title with the text 'Weather App'", () => {
		const headerText = screen.getByText("Weather-ui");
		expect(headerText).toBeInTheDocument();
	});
});
