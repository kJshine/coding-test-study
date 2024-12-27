const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
let result = "";
for (let i=0; i<input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    if (a === 0 && b === 0) break;
    result += `${a + b}\n`;
}
console.log(result);