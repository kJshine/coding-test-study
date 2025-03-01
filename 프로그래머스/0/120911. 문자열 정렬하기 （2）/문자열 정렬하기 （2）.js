function solution(my_string) {
    return [...my_string].map(str => str.toLowerCase()).sort().join("");
}