import React from "react";
import "../styles/sideBar.css";
import { i18n } from "../i18n/index";

const Sidebar: React.FC = () => {
	return (
		<>
			<div className="sidebar" data-testid="sidebar">
				<div className="sidebar-inner-container">
					<h1 className="sidebar-header-text">{i18n.t("sidebar.title")}</h1>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
