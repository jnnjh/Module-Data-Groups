// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const numbersOnly = list.filter((item) => typeof item === "number");
  if (numbersOnly.length === 0) {
    return null;
  }
  const sortedNumbers = [...numbersOnly].sort((a, b) => a - b);

  const len = sortedNumbers.length;
  const middleIndex = Math.floor(len / 2);
  if (len % 2 !== 0) {
    return sortedNumbers[middleIndex];
  } else {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
