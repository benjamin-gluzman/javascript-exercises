const fibonacci = function(n) {
    if(n < 0) {
        return "OOPS";
    }
    if(n < 2) {
        return +n;
    }
    let num1 = 0, num2 = 1;
    let num3;

    for(let i = 1; i < n; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }

    return num3;
};

// Do not edit below this line
module.exports = fibonacci;
