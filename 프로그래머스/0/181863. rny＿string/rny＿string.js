function solution(rny_string) {
    return [...rny_string].reduce((acc, cur) => cur === "m" ? acc + "rn" : acc + cur, "");
}