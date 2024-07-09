import React from "react";
import "../styles/sideBar.css";
import { i18n } from "../i18n/index";

interface SidebarProps {
	recentSearches: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ recentSearches }) => {
	return (
		<>
			<div className="sidebar" data-testid="sidebar">
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
				</div>
			</div>
		</>
	);
};

export default Sidebar;
