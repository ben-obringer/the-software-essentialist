import { validatePassword } from "./";

describe("password validator", () => {
  test.each([["4ouR"], ["1P"]])(
    `returns false with errors for passwords less than 5 chars`,
    (password) => {
      expect(validatePassword(password)).toEqual({
        valid: false,
        errors: ["Password must be between 5 and 15 characters"],
      });
    }
  );

  test.each([["thisissixteencH3"], ["thisissixteenchathisissixteencH3"]])(
    `returns false with errors for passwords greater than 15 chars`,
    (password) => {
      expect(validatePassword(password)).toEqual({
        valid: false,
        errors: ["Password must be between 5 and 15 characters"],
      });
    }
  );

  it("returns false with errors for passwords without a digit", () => {
    expect(validatePassword("passworD")).toEqual({
      valid: false,
      errors: ["Password must contain at least one digit"],
    });
  });

  it("returns false with errors for passwords without an uppercase letter", () => {
    expect(validatePassword("password1")).toEqual({
      valid: false,
      errors: ["Password must contain at least one uppercase letter"],
    });
  });

  it("returns multiple errors for passwords that fail multiple rules", () => {
    expect(validatePassword("")).toEqual({
      valid: false,
      errors: [
        "Password must be between 5 and 15 characters",
        "Password must contain at least one digit",
        "Password must contain at least one uppercase letter",
      ],
    });
  });

  it("returns true with no errors for passwords that pass all rules", () => {
    expect(validatePassword("Password1")).toEqual({
      valid: true,
      errors: [],
    });
  });
});
