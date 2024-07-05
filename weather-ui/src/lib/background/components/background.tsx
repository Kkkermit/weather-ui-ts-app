import "../styles/background.css";

function Background() {
	return (
		<>
			<div className="background" data-testid="background">
				<video
					data-testid="background-video"
					autoPlay
					loop
					muted
					src="https://r2.guns.lol/91fb1564-b77a-44ab-b6f1-d9dcda08bf37.mp4"
				/>
			</div>
		</>
	);
}

export default Background;
