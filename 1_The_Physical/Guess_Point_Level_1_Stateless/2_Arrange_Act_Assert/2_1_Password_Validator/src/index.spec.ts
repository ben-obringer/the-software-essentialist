import { validatePassword } from "./";

describe("password validator", () => {
  test.each([["four"], [""]])(
    `returns false with errors for passwords less than 5 chars`,
    (password) => {
      expect(validatePassword(password)).toEqual({
        valid: false,
        errors: ["Password must be between 5 and 15 characters"],
      });
    }
  );

  test.each([["thisissixteencha"], ["thisissixteenchathisissixteencha"]])(
    `returns false with errors for passwords greater than 15 chars`,
    (password) => {
      expect(validatePassword(password)).toEqual({
        valid: false,
        errors: ["Password must be between 5 and 15 characters"],
      });
    }
  );
});
