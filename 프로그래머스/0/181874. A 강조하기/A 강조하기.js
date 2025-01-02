function solution(myString) {
    var answer = [...myString].map((v) => v === "a" || v === "A" ? "A" : v.toLowerCase()).join("");
    return answer;
}