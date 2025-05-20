const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [string, bomb] = input;
const stack = [];

for (const item of string) {
  stack.push(item);
  const stackLength = stack.length;
  const bombLength = bomb.length;

  if (stackLength >= bombLength && op(stackLength, bombLength)) {
    for (let i = 0; i < bombLength; i++) {
      stack.pop();
    }
  }
}

function op(stackLength, bombLength) {
  for (let i = 0; i < bombLength; i++) {
    if (stack[stackLength - bombLength + i] != bomb[i]) return false;
  }
  return true;
}

const answer = stack.join("");
console.log(answer.length > 0 ? answer : "FRULA");
