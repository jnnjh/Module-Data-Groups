function tally(arr) {
    if(arr.length === 0) return {};
    else if(!Array.isArray(arr)) return "error";
    const newArr = [];
    for(let item of arr) {
        if(!newArr.includes(item)){
            newArr.push(item);
        }
    }
    const countArr = [];
    for(let item of newArr){
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            if(item === arr[i]) count++;
        }
        countArr.push(count);
    }
    const combine = newArr.map((item, i) => [item, countArr[i]]);
    const obj = Object.fromEntries(combine);
    return obj;
}

module.exports = tally;
