function dedupe(list) {
  if (!Array.isArray(list)) {
    return list;
  }
  return [...new Set(list)];
}

module.exports = dedupe;
