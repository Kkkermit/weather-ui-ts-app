import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet-src.esm";
import { tileLayerParams, weatherMapLayerParams } from "./weather-map-layer";
import config from "../api/config/apiUrls.json";

function WeatherMap({ lat, lon }: { lat: number; lon: number }) {
	const mapRef = useRef(null);

	useEffect(() => {
		const map = L.map(mapRef.current ?? "").setView([lat, lon], 2);

		L.tileLayer(`${config.openStreetMap}`, {
			...tileLayerParams,
		}).addTo(map);

		const weatherLayer = L.tileLayer(`${config.apiWeatherMap}`, {
			...weatherMapLayerParams,
		}).addTo(map);

		const opacityControl = L.control({ position: "topright" });
		opacityControl.onAdd = function () {
			const div = L.DomUtil.create("div", "opacity-control");
			div.innerHTML =
				'<label for="opacity">Opacity:</label><input id="opacity" type="range" min="0" max="1" step="0.1" value="1">';
			div.oninput = function (e) {
				weatherLayer.setOpacity(e.target.value);
			};
			return div;
		};
		opacityControl.addTo(map);

		return () => {
			map.remove();
		};
	}, [lat, lon]);

	return <div ref={mapRef} style={{ height: "500px", width: "1000px" }} />;
}

export default WeatherMap;
