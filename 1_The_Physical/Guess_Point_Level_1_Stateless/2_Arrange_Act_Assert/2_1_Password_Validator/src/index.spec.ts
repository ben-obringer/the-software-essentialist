import { validatePassword } from "./";

describe("password validator", () => {
  it("returns false with errors for passwords less than 5 chars", () => {
    expect(validatePassword("four")).toEqual({
      valid: false,
      errors: ["Password must be between 5 and 15 characters"],
    });
  });
});
