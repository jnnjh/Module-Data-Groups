function sum(numbers) {
  const numbersOnly = numbers.filter((item) => typeof item === "number");
  return numbersOnly.reduce((total, current) => total + current, 0);
}

module.exports = sum;
