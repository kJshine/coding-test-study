const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let totalPrice = Number(input[0]);
let type = Number(input[1]);
let resultTotalPrice = 0;
for (let i = 2; i < 2 + type; i++) {
    let splitNum = input[i].split(" ");
    resultTotalPrice += Number(splitNum[0]) * Number(splitNum[1]);
}
if (totalPrice === resultTotalPrice) {
    console.log("Yes");
} else {
    console.log("No");
}