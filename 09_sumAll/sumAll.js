const sumAll = function(start, end) {
    if(typeof start != "number" || typeof end != "number" || Math.floor(start) != start || Math.floor(end) != end) {
        return 'ERROR';
    }
    if(start < 0 || end < 0) return 'ERROR';
    let sum = 0;
    for(let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
