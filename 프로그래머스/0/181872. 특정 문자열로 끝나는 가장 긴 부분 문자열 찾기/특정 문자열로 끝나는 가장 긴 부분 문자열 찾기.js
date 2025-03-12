function solution(myString, pat) {
    const reversedStr = [...myString].reverse().join("");
    const index = reversedStr.indexOf([...pat].reverse().join(""));
    return [...reversedStr].slice(index).reverse().join("");
}