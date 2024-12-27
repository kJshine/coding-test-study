const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let num = input / 4;
let result = "";
for (let i=0; i < num; i++) {
    result += "long ";
    if ( i === num - 1) result += "int";
}
console.log(result);