function contains(obj, item) {
    const objArr = Object.getOwnPropertyNames(obj)
    if(objArr.length === 0) return false;
    else if(objArr.includes(item)) return true;
    else if(!objArr.includes(item)) return false;
    else if(typeof obj !== "object") return false;
}
    
    

module.exports = contains;
