const removeFromArray = function(arr, ...other) {
    return arr.filter(num => !other.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
