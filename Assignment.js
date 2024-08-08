function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}
console.log(reverseNumber(149));