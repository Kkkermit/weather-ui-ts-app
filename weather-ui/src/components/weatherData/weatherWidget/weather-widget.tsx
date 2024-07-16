declare global {
	interface Window {
		myWidgetParam: any[];
	}
}

import { useEffect } from "react";
import { weatherWidgetParams } from "./weather-widget-params";

function WeatherWidget({ cityId }: { cityId: number }) {
	useEffect(() => {
		const d3Script = document.createElement("script");
		d3Script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js";
		d3Script.async = true;
		document.body.appendChild(d3Script);

		const owmScript = document.createElement("script");
		owmScript.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
		owmScript.async = true;
		document.body.appendChild(owmScript);

		window.myWidgetParam = window.myWidgetParam || [];
		window.myWidgetParam.push({
			cityid: cityId,
			...weatherWidgetParams,
		});

		return () => {
			document.body.removeChild(d3Script);
			document.body.removeChild(owmScript);
		};
	}, [cityId]);

	return <div id="openweathermap-widget-21" />;
}

export default WeatherWidget;
