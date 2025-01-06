function solution(my_string) {
    var answer = '';
    const vowels = ["a", "e", "i", "o", "u"];
    answer = [...my_string].filter((v) => !vowels.includes(v)).join("");
    return answer;
}