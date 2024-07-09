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
});
