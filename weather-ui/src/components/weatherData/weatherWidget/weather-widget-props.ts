export function getWeatherWidgetProps(cityId: number | null): WeatherWidgetProps {
	return { cityId };
}

export interface WeatherWidgetProps {
	cityId: number | null;
}
