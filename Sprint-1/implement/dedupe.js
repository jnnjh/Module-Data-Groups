function dedupe(arr) {
    if(arr.length === 0) return [];

    else {
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            if(newArr.includes(arr[i]) === false){
                newArr.push(arr[i]);
            }
        }
    return newArr;
    }
    
}

module.exports = dedupe;
