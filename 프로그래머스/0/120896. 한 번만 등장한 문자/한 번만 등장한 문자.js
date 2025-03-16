function solution(s) {
    const set = new Set();
    return [...[...s].reduce((acc, cur) => {
        if (acc.includes(cur) || [...set].includes(cur)) {
            set.add(cur);
            return acc.replace(new RegExp(cur, "g"), "");
        } else {
            return acc + cur;
        }
    }, "")].sort().join("");
}