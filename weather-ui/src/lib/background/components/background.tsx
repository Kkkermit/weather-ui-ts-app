import "../styles/background.css";
import image from "../assets/pic.jpg";

function Background() {
	return (
		<>
			<div className="background" data-testid="background">
				<img data-testid="background-video" src={image} />
			</div>
		</>
	);
}

export default Background;
