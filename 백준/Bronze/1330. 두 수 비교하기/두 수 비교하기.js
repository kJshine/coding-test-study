const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();
input = input.split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
if(a < b) c = console.log('<');
if(a > b) c = console.log('>');
if(a == b) c = console.log('==');
