const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a+b+c);