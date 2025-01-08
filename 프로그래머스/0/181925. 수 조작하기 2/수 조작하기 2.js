function solution(numLog) {
    // 1. for 문
    
    // var answer = '';
    // for (let i=1; i<numLog.length; i++) {
    //     const diff = numLog[i] - numLog[i-1];
    //     let str = "";
    //     if (diff === 1) str = "w";
    //     else if (diff === -1) str = "s";
    //     else if (diff === 10) str = "d";
    //     else if (diff === -10) str = "a";
    //     answer += str;
    // }
    // return answer;
    
    // 리팩토링 : 조건문을 객체로 매핑하여 단순화, 불필요한 임시 변수 제거
    // 1. reduce 함수 사용
    // const commands = {
    //    1: "w",
    //    '-1': "s",
    //    10: "d",
    //    '-10': "a",
    // }
    
    // return numLog.slice(1).reduce((acc, cur, i) => acc + commands[cur - numLog[i]], "");
    
    // 2. map
    return numLog
        .slice(1)
        .map((v, i) => {
            const diff = v - numLog[i];
            return {
                1: "w",
                '-1': "s",
                10: "d",
                '-10': "a",
            }[diff]
        }).join("");
}