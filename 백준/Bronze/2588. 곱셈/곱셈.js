const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(`\n`);

const a = Number(input[0]);
const b2 = [...input[1]];

console.log(a*Number(b2[2]));
console.log(a*Number(b2[1]));
console.log(a*Number(b2[0]));
console.log(a*Number(input[1]));