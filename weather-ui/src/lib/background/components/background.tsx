import "../styles/background.css";
import vid from "../assets/pic.jpg";

function Background() {
	return (
		<>
			<div className="background" data-testid="background">
				<img data-testid="background-video" src={vid} />
			</div>
		</>
	);
}

export default Background;
