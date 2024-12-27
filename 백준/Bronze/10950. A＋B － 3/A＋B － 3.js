const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const length = input[0];
for (let i = 1; i <= length; i++) {
    let num = input[i].split(" ");
    console.log(Number(num[0]) + Number(num[1]));
}