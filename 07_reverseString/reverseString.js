const reverseString = function(str) {
    let result = "";
    for(let char of str) {
        result = char + result;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
