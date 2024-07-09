import "../styles/header.css";
import { i18n } from "../../../i18n/index";

function Header() {
	return (
		<>
			<div className="header-container" data-testid="header">
				<div className="header-inner-container">
					<header className="header">
						<h1 className="header-title" data-testid="header-title">
							{i18n.t("header.title")}
						</h1>
					</header>
				</div>
			</div>
		</>
	);
}

export default Header;
