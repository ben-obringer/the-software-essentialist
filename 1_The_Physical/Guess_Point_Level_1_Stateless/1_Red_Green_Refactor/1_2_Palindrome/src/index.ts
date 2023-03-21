function reverse(str: string) {
  return str.split("").reverse().join("");
}

function removeSpaces(str: string) {
  return str.replace(/\s/g, "");
}

export const isPalindrome = (str: string): boolean => {
  const reversedStr = reverse(str);
  return (
    removeSpaces(reversedStr.toLowerCase()) === removeSpaces(str.toLowerCase())
  );
};
