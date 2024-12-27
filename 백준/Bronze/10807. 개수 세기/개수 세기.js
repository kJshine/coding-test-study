const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
const length = Number(input[0]);
const arr2 = input[1].split(" ");
for (let i=0; i<length; i++) {
    if (Number(arr2[i]) === Number(input[2])) arr.push(Number(arr2[i]));
}
console.log(arr.length);