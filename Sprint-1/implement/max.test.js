/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity", () => {
    const input = [];
    expect(findMax(input)).toBe("Infinity");
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with 1 number, returns that number", () => {
    const input = [2];
    expect(findMax(input)).toBe(2);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns the largest number overall", () => {
    const input = [2, -8, 10, -20, 1, 0, 5, -40, 50, 4];
    expect(findMax(input)).toBe(50);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with only negative numbers, returns the closest number to zero", () => {
    const input = [-8, -20, -40, -3, -2, -16, -5];
    expect(findMax(input)).toBe(-2);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
    const input = [2.5, 7.13, 0.75, 10.2, 4.68, 3.01, 8.9, 1.42];
    expect(findMax(input)).toBe(10.2);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non number values, returns the max and ignore non-numeric values", () => {
    const input = [3.14, "apple", 0, null, 7, "42", undefined, -2.5];
    expect(findMax(input)).toBe(7);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non number values, returns null", () => {
    const input = ["apple", null, "hello", undefined, true, false, {}, []];
    expect(findMax(input)).toBe(null);
});
