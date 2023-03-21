import { isPalindrome } from "./";

describe("palindrome checker", () => {
  it("outputs true for 'mom'", () => {
    expect(isPalindrome("mom")).toBeTruthy();
  });

  it("outputs false for 'bill'", () => {
    expect(isPalindrome("bill")).toBeFalsy();
  });

  it("outputs true for 'Mom'", () => {
    expect(isPalindrome("Mom")).toBeTruthy();
  });

  it("outputs true for 'Was It A Rat I Saw'", () => {
    expect(isPalindrome("Was It A Rat I Saw")).toBeTruthy();
  });

  it("outputs false for 'Change is inevitable'", () => {
    expect(isPalindrome("Change is inevitable")).toBeFalsy();
  });
});
