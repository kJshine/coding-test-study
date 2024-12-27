const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [length, num] = input[0].split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);
let result = "";

for (let i=0; i<length; i++) {
    if (arr[i] < num) {
        result += `${arr[i]}`;
        result += " ";
        if (i === length) break; 
    }
}
console.log(result);