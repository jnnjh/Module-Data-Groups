/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, return 0", () => {
    const input = [];
    expect(sum(input)).toBe(0);
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, return that number", () => {
    const input = [5];
    expect(sum(input)).toBe(5);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, return the sum", () => {
    const input = [-8, -20, -40, -3, -2, -16, -5];
    expect(sum(input)).toBe(-94);
})

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, return the sum", () => {
    const input = [2.5, 7.13, 0.75, 10.2, 4.68, 3.1, 8.9, 1.42];
    expect(sum(input)).toBe(38.68);
})

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non-number values, ignore the non numerical values and return the sum", () => {
    const input = [3.1, "apple", 0, null, 7, "42", undefined, -2.5];
    expect(sum(input)).toBe(7.6);
})

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, return null", () => {
    const input = ["apple", null, "hello", undefined, true, false, {}, []];
    expect(sum(input)).toBe(null);
})
