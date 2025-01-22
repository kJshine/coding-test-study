function solution(myString, pat) {
    const replaced = [...myString].reduce((acc, cur) => cur === "A" ? acc + "B" : acc + "A", "");
    return replaced.includes(pat) ? 1 : 0;
}