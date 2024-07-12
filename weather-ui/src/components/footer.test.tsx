import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import { describe, it, expect } from "vitest";
import { i18n } from "../i18n/index";

describe("Footer", () => {
	beforeEach(() => {
		render(<Footer />);
	});
	it("renders the footer container", () => {
		const footerContainer = screen.getByTestId("footer-container-ui");
		expect(footerContainer).toBeInTheDocument();
	});

	it("renders the footer", () => {
		const footer = screen.getByTestId("footer");
		expect(footer).toBeInTheDocument();
	});

	it("renders the footer message", () => {
		const footerMessage = screen.getByText(i18n.t("footer.footerMessage"));
		expect(footerMessage).toBeInTheDocument();
	});
});
