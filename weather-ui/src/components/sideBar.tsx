import React from "react";
import "../styles/sideBar.css";
import { i18n } from "../i18n/index";
import locationLogo from "../assets/location-logo.svg";
import { SidebarProps } from "./sideBar-props";
import Footer from "./footer";

const Sidebar: React.FC<SidebarProps> = ({ recentSearches, locationEnabled }) => {
	return (
		<>
			<div className="sidebar" data-testid="sidebar">
				{locationEnabled && (
					<div className="location-enabled-container">
						<img
							className="location-enabled-logo"
							src={locationLogo}
							alt="Location Logo"
							data-testid="location-enabled-logo"
						/>
						<p className="location-enabled-message">{i18n.t("sidebar.locationEnabled")}</p>
					</div>
				)}
				<div className="sidebar-inner-container">
					<h1 className="sidebar-header-text" data-testid="sidebar-title">
						{i18n.t("sidebar.title")}
					</h1>
					<ul className="sidebar-list-container">
						{recentSearches.map((search, index) => (
							<li className="sidebar-list" key={index}>
								{search}
							</li>
						))}
					</ul>
					<div className="footer-container-ui">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
