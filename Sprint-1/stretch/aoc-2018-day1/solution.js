function calibrate(input) {
  return input.reduce((total, change) => {
    return total + parseInt(change, 10);
  }, 0);
}

module.exports = calibrate;