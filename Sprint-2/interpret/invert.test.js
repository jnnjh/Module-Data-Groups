const invert = require("./invert.js");

test("given an object with key: value pair, when passed to invert will reverse the values so value will be the key and the key is the value", () => {
    const obj = {
        one: 1,
        two: 2,
        three: 3
    }
    const result = {
        1: "one",
        2: "two",
        3: "three"
    }
    const func = invert(obj);
    expect(func).toEqual(result);
})