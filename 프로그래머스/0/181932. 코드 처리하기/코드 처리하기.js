function solution(code) {
    var answer = '';
    let mode = 0;
    [...code].map((v,i) => {
        if (!mode) {
            if (v !== "1" && i % 2 === 0) answer += v;
            if (v === "1") mode = 1;
        } else {
            if (v !== "1" && i % 2 === 1) answer += v;
            if (v === "1") mode = 0;
        }
    });
    
    return answer.length !== 0 ? answer : "EMPTY";
}