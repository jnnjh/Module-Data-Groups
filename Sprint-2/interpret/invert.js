// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
*/

// a) What is the current return value when invert is called with { a : 1 } ANSWER: {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 } ANSWER: {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2} ANSWER: {1: a, 2: b}

// c) What does Object.entries return? Why is it needed in this program? . it returns an array. It's useful here because we have to reiterate the array(after we convert the object to array).

// d) Explain why the current return value is different from the target output? ANSWER: Because we are only assigning the value to the "key" property.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


function invert(obj) {
  const newArr = []

  for (const [key, value] of Object.entries(obj)) {
    newArr.push([key, value].toReversed());
  }
  const invertedObj = Object.fromEntries(newArr);
  return invertedObj;
}

module.exports = invert;