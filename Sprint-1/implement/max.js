function findMax(elements) {
  const numbersOnly = elements.filter((item) => typeof item === "number");
  if (numbersOnly.length === 0) {
    return -Infinity;
  }
  return Math.max(...numbersOnly);
}

module.exports = findMax;
