function solution(s) {
    return s.split(" ").map((str) => {
        return [...str].map((item, i) => i % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join("");
    }).join(" ");
}