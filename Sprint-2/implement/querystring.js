function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }
  const index1 = queryString.indexOf("=")
  const firstOccurence = queryString.slice(0, index1);
  const val = queryString.slice(index1 + 1);
  const arrKeyVal = [[firstOccurence, val]];  
  if(queryString.includes("=")){
    return Object.fromEntries(arrKeyVal);
  }

  return queryParams;
}

module.exports = parseQueryString;
