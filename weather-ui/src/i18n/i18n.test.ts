import i18n from "./i18n";
import { describe, it, expect } from "vitest";

describe("i18n translation", () => {
	it("should initialize i18n with default language", () => {
		expect(i18n.language).toBe("en");
	});

	it("should change language to spanish", () => {
		i18n.changeLanguage("es");
		expect(i18n.language).toBe("es");
	});

	it("should be able to change to french", () => {
		i18n.changeLanguage("fr");
		expect(i18n.language).toBe("fr");
	});

	it("should translate the header title", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("header.title");
		expect(enTitle).toBe("Weather-ui");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("header.title");
		expect(esTitle).toBe("Interfaz de usuario del tiempo");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("header.title");
		expect(frTitle).toBe("Interface météo");
	});

	it("should translate the sidebar title", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("sidebar.title");
		expect(enTitle).toBe("Recent Searches");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("sidebar.title");
		expect(esTitle).toBe("Búsquedas recientes");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("sidebar.title");
		expect(frTitle).toBe("Recherches récentes");
	});

	it("should translate the sidebar location enabled text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("sidebar.locationEnabled");
		expect(enTitle).toBe("Location services has been enabled");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("sidebar.locationEnabled");
		expect(esTitle).toBe("Los servicios de ubicación han sido habilitados");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("sidebar.locationEnabled");
		expect(frTitle).toBe("Les services de localisation ont été activés");
	});

	it("should translate the weather title", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.title");
		expect(enTitle).toBe("Enter location");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.title");
		expect(esTitle).toBe("Introducir ubicación");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.title");
		expect(frTitle).toBe("Entrez l'emplacement");
	});

	it("should translate the weather search placeholder text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.placeholder");
		expect(enTitle).toBe("Location");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.placeholder");
		expect(esTitle).toBe("Ubicación");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.placeholder");
		expect(frTitle).toBe("Emplacement");
	});

	it("should translate the weather search button text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.search");
		expect(enTitle).toBe("Search");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.search");
		expect(esTitle).toBe("Buscar");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.search");
		expect(frTitle).toBe("Chercher");
	});

	it("should translate the weather in text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.weatherIn");
		expect(enTitle).toBe("Weather in");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.weatherIn");
		expect(esTitle).toBe("Tiempo en");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.weatherIn");
		expect(frTitle).toBe("Météo à");
	});

	it("should translate the weather temp text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.temp");
		expect(enTitle).toBe("Temperature");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.temp");
		expect(esTitle).toBe("Temperatura");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.temp");
		expect(frTitle).toBe("Température");
	});

	it("should translate the weather temperature text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.temperature");
		expect(enTitle).toBe("Temperature range");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.temperature");
		expect(esTitle).toBe("Rango de temperatura");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.temperature");
		expect(frTitle).toBe("Écart de température");
	});

	it("should translate the weather humidity text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.humidity");
		expect(enTitle).toBe("Humidity");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.humidity");
		expect(esTitle).toBe("Humedad");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.humidity");
		expect(frTitle).toBe("Humidité");
	});

	it("should translate the weather sunrise text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.sunrise");
		expect(enTitle).toBe("Sunrise");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.sunrise");
		expect(esTitle).toBe("Amanecer");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.sunrise");
		expect(frTitle).toBe("Lever du soleil");
	});

	it("should translate the weather sunset text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.sunset");
		expect(enTitle).toBe("Sunset");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.sunset");
		expect(esTitle).toBe("Atardecer");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.sunset");
		expect(frTitle).toBe("Coucher de soleil");
	});

	it("should translate the weather errors fetching data text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.errors.fetchingData");
		expect(enTitle).toBe("Error fetching data");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.errors.fetchingData");
		expect(esTitle).toBe("Error al obtener datos");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.errors.fetchingData");
		expect(frTitle).toBe("Erreur lors de la récupération des données");
	});

	it("should translate the weather errors unable to fetch data text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.errors.unableToFetchData");
		expect(enTitle).toBe("Unable to fetch data from the API");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.errors.unableToFetchData");
		expect(esTitle).toBe("No se pueden obtener datos de la API");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.errors.unableToFetchData");
		expect(frTitle).toBe("Impossible de récupérer les données de l'API");
	});

	it("should translate the weather errors unable to find location text", () => {
		i18n.changeLanguage("en");
		const enTitle = i18n.t("weather.errors.unableToFindLocation");
		expect(enTitle).toBe("Unable to search location. Please check spelling and try again.");
		i18n.changeLanguage("es");
		const esTitle = i18n.t("weather.errors.unableToFindLocation");
		expect(esTitle).toBe("No se puede buscar la ubicación. Verifique la ortografía y vuelva a intentarlo.");
		i18n.changeLanguage("fr");
		const frTitle = i18n.t("weather.errors.unableToFindLocation");
		expect(frTitle).toBe("Impossible de rechercher l'emplacement. Veuillez vérifier l'orthographe et réessayer.");
	});
});
