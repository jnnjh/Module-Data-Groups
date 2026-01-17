// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function checkNaN(item) {
    if(typeof item === "number") return true;
}

function sort(a,b) {
    return a-b;
}

function calculateMedian(list) {
    if(!Array.isArray(list)) return null;

    const filteredList = list.filter(checkNaN);
    if(filteredList.length === 0) return null;

    const newList = filteredList.toSorted(sort);
    if(newList.length % 2 !== 0) {
        const middleIndex = Math.floor(newList.length / 2);
        const median = newList.splice(middleIndex, 1)[0];
        return median;
    } else {
        const middleIndex = newList.length / 2;
        const median = (newList[middleIndex-1] + newList[middleIndex]) / 2;
        return median;
    }
    
}

module.exports = calculateMedian;
