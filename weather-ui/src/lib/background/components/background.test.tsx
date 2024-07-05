import { screen, render } from "@testing-library/react";
import Background from "./background";
import { describe, it, expect, beforeEach } from "vitest";

describe("Background", () => {
	beforeEach(() => {
		render(<Background />);
	});
	it("should render the background", () => {
		const background = screen.getByTestId("background");
		expect(background).toBeInTheDocument();
	});
	it("should render the background video", () => {
		const backgroundVideo = screen.getByTestId("background-video");
		expect(backgroundVideo).toBeInTheDocument();
	});
});
