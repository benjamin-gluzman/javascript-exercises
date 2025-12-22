const palindromes = function (str) {
    const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz1234567890";
    str = str.toLowerCase().split("").filter((char) => ALPHANUMERIC.includes(char)).join("");
    let reverse = str.split("").reverse().join("");

    return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
