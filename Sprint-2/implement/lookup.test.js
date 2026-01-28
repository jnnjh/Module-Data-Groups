const createLookup = require("./lookup.js");


test('given an array with country code and currency code pairs, when passed to createLookup will return an object where the keys are the country codes and the values are the currencyy codes', () => {
    const countryCurrency = [['US', 'USD'], ['CA', 'CAD'], ['PH', 'PHP']];
    const obj = {
        US: 'USD',
        CA: 'CAD',
        PH: 'PHP'
    };
    const func = createLookup(countryCurrency);
    expect(func).toEqual(obj);
});
/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
