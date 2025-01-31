// Four Functions

// Sum of Array

function sumOfArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return arr.reduce((sum, num) => sum + num, 0);
}

// Reverse String

function reverseString(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str.split("").reverse().join("");
}

// Check Palindrome
function isPalindrome(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Find Max in Array
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    throw new Error("Input must be a non-empty array");
  return Math.max(...arr);
}

// Export functions for testing
module.exports = { sumOfArray, reverseString, isPalindrome, findMax };
