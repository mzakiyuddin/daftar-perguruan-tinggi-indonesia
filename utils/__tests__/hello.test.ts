import { hello } from "~/utils/hello";

describe("hello", () => {
  it("should return a string", () => {
    expect(hello("Zakiego")).toBe("Hello Zakiego!");
  });
});
