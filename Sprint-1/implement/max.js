function checkType(item) {
    if(typeof item === "number") return true;
}
function findMax(elements) {
    if(elements.length === 0) return "Infinity";
    else if(elements.length === 1) return elements[0];
    else {
        let filteredElem = elements.filter(checkType);
        let sortedElem = filteredElem.sort((a,b) => {
            return a-b;
        });
        if(sortedElem.length === 0) return null;
        
        return sortedElem[sortedElem.length - 1];
    }
}

module.exports = findMax;
