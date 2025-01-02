function solution(my_string, alp) {
    var answer = [...my_string].map((v, i) => v === alp ? v.toUpperCase() : v).join("");
    return answer;
}