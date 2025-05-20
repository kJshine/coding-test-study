const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const arr = input.split("\n");
const answer = []

for (let i = 1; i <= arr[0]; i++) {
  if (+arr[i] === 0) {
    answer.pop();
  } else {
    answer.push(+arr[i]);
  }
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));