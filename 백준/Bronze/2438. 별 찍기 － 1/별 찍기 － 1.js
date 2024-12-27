const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const length = Number(input);
let result = "";
let star = "";
for (let i=1; i<=length; i++) {
    result += "*".repeat(i);
    if (i !== length) result += "\n";
}
console.log(result);