function filterType(item) {
    if(typeof item === "number") {
        return true;
    }
}
function sum(elements) {
    if(elements.length === 0) return 0;
    else if(elements.length === 1) return elements[0];
    else {
        let newArr = elements.filter(filterType);
        if(newArr.length === 0) return null;
        
        let sum = 0;
        for(let i = 0; i < newArr.length; i++) {
            sum += newArr[i];
        }
        return sum;
    }
}

module.exports = sum;
