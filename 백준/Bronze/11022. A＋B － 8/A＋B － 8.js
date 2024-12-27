const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let length = Number(input[0]);
let result = "";
for (let i=1; i < length + 1; i++) {
    let splitNum = input[i].split(" ");
    result += `Case #${i}: ${Number(splitNum[0])} + ${Number(splitNum[1])} = ${Number(splitNum[0]) + Number(splitNum[1])}`;
    if (i !== length) result += "\n";
}
console.log(result);