const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let result = "";
let i = 0;
while (i < input.length) {
    if (input[i] === "") break;
    const [a, b] = input[i].split(" ").map(Number);
    result += a + b;
    i++;
    if (i !== input.length) result += "\n";
}
console.log(result);