export const tileLayerParams = {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

export const weatherMapLayerParams = {
	attribution: "Weather data © OpenWeatherMap",
	layer: "precipitation_new",
	appid: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
};
