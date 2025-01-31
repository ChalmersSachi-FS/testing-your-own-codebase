// Functional Tests

const {
  sumOfArray,
  reverseString,
  isPalindrome,
  findmax,
  findMax,
} = require("./functions");

test("sumOfArray - sums all numbers in an array", () => {
  expect(sumOfArray([1, 2, 3, 4])).toBe(10);
  expect(sumOfArray([-1, -2, -3, -4])).toBe(-10);
  expect(sumOfArray([])).toBe(0);
});

test("reverseString - reverses a given string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("")).toBe("");
  expect(() => reverseString(123)).toThrow("Input must be a string");
});

test("isPalindrome - checks if a string is a palidrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("")).toBe(true);
  expect(() => isPalindrome(123)).toThrow("Input must be a string");
});

test("findMax - finds the largest number in an array", () => {
  expect(findMax([1, 2, 3, 4, 5])).toBe(5);
  expect(findMax([-10, -3, -1])).toBe(-1);
  expect(() => findMax([])).toThrow("Input must be a non-empty array");
});
