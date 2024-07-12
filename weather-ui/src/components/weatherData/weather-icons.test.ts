import { getWeatherIcon } from "./weather-icons";

describe("getWeatherIcon", () => {
	it("should return correct icon URL for each weather description", () => {
		expect(getWeatherIcon("overcast clouds")).toBe(
			"https://imgs.search.brave.com/ZZcoKuSwlSqQ6h7aFKbi-zBnvVCAL-qLV3W-0zD9eaA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM1NDgzL3Bob3Rv/L2ZsdWZmeS13aGl0/ZS1jbG91ZHMtZnJv/bS1hYm92ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ME9o/LTJYc2ZrWWdJaVBu/eUppLVdtNlFOYjJJ/UXJrNGdqZ050bHRi/QTNWND0",
		);
	});
	it("should return undefined for unknown weather description", () => {
		expect(getWeatherIcon("unknown weather")).toBeUndefined();
	});
});
