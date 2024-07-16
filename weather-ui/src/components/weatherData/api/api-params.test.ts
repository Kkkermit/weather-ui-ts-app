import { setApiParams } from "./api-params";
import { describe, it, expect } from "vitest";

describe("api-params", () => {
	it("should have the correct structure and default values", () => {
		expect(setApiParams).toEqual({
			appid: expect.any(String),
			units: "metric",
		});
	});
});
