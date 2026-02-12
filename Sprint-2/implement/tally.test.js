const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("given an empty array when passed to tally will return empty object", () => {
    const arr = [];
    const func = tally(arr);
    expect(func).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("given an array with dupçlicate items when passed to tally will return counts for each unique item", () => {
    const arr = ['apple', 'apple', 'orange', 'orange', 'durian', 'apple', 'durian'];
    const func = tally(arr);
    const obj = {
        apple: 3,
        orange: 2,
        durian: 2,
    }
    expect(func).toEqual(obj);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("given an invalid input, when passed to tally should throw an error", () => {
    const str = "hello";
    const func = tally(str);
    expect(func).toEqual("error");
})
