const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

const a = Number(input);
if (90 <= a && a <= 100) console.log('A');
if (80 <= a && a < 90) console.log('B');
if (70 <= a && a < 80) console.log('C');
if (60 <= a && a < 70) console.log('D');
if (a < 60) console.log('F');