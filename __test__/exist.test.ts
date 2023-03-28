import { existsSync } from "fs";

describe("exist", () => {
  it("should exist", () => {
    expect(existsSync("data/data.json")).toBe(true);
    expect(existsSync("data/data.csv")).toBe(true);
    expect(existsSync("data/data.xlsx")).toBe(true);
  });
});
