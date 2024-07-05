import "../styles/header.css";

function Header() {
	return (
		<>
			<div className="header-container" data-testid="header">
				<div className="header-inner-container">
					<header className="header">
						<h1 className="header-title" data-testid="header-title">
							Weather-ui
						</h1>
					</header>
				</div>
			</div>
		</>
	);
}

export default Header;
