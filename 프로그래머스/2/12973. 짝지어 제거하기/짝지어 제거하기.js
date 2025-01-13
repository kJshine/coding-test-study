// function solution(s) {
//     let str = s;
//     while (str !== deleteStr(str)) {
//         str = deleteStr(str);
//     }
//     return str.length === 0 ? 1 : 0;  
// }

// function deleteStr(str) {
//     for (let i = 0; i < str.length - 1; i++) {
//         if (str[i] === str[i+1]) {
//             const regex = new RegExp(`${str[i]}${str[i]}`, "g")
//             return str.replace(regex, "");
//         }
//     }
//     return str;
// }

function solution(s) {
    const stack = [];
    
    for (let str of s) {
        if (stack.length !== 0 && stack[stack.length - 1] === str) {
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    return stack.length === 0 ? 1 : 0;
}