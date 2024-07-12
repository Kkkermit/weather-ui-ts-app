import React from "react";
import "../styles/footer.css";
import { i18n } from "../i18n/index";

const Footer: React.FC = () => {
	return (
		<div className="footer-container" data-testid="footer-container-ui">
			<div className="footer-inner-container">
				<div className="sidebar-blank-space">{""}</div>
				<footer className="footer" data-testid="footer">
					{i18n.t("footer.footerMessage")}
				</footer>
				<div className="sidebar-blank-space-footer">{""}</div>
			</div>
		</div>
	);
};

export default Footer;
