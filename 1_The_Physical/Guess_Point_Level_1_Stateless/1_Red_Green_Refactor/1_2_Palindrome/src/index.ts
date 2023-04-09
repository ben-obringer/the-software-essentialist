function reverse(str: string) {
  return str.split("").reverse().join("");
}

function ignoreCase(str: string) {
  return str.toLowerCase();
}

function ignoreSpacing(str: string) {
  return str.replace(/\s+/g, "");
}

export const isPalindrome = (str: string): boolean => {
  const reversedStr = reverse(str);
  return (
    ignoreSpacing(ignoreCase(reversedStr)) === ignoreSpacing(ignoreCase(str))
  );
};
