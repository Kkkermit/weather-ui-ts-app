import { render, screen } from "@testing-library/react";
import SideBar from "./sideBar";
import { describe, it, expect, beforeEach } from "vitest";
import { i18n } from "../i18n/index";

describe("SideBar", () => {
	beforeEach(() => {
		render(<SideBar recentSearches={[]} />);
	});
	it("should render the sidebar", () => {
		const sidebar = screen.getByTestId("sidebar");
		expect(sidebar).toBeInTheDocument();
	});
	it("should render the sidebar title", () => {
		const sidebarTitle = screen.getByTestId("sidebar-title");
		expect(sidebarTitle).toBeInTheDocument();
	});
	it('should render the sidebar title with the text "Weather App"', () => {
		const sidebarText = screen.getByText(i18n.t("sidebar.title"));
		expect(sidebarText).toBeInTheDocument();
	});
});
