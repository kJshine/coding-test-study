const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let totalNumber = 0;
for (let i = 0; i <= input; i++) {
    totalNumber += i
}
console.log(totalNumber);