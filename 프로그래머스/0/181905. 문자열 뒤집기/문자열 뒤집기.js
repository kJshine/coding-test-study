function solution(my_string, s, e) {
    let arr = [...my_string];
    const reversed = arr.slice(s, e + 1).reverse().join("");
    const spliced = arr.splice(s, reversed.length, reversed).join("")
    return arr.join("");
}