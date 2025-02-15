function solution(s) {
    var answer = 0;
    let str = s;
    
    for (let i = 0; i < s.length; i++) {
        let transformed = transform(str);
        
        answer++; // answer 일단 1 추가
        
        // 문자열에서 올바른 괄호를 반복해서 제거한 값의 길이가 0이 될 때까지 반복
        while (transformed.length !== 0) {
            // 하지만 이전과 변환된 문자열이 같다면 answer 1 감소
            if (transformed === transform(transformed)) {
                answer--;
                break;
            }
            transformed = transform(transformed);
        }
        
        // s를 왼쪽으로 회전
        const strArray = [...str];
        const firstElement = strArray.shift();
        strArray.push(firstElement);
        str = [...strArray].join("");
    }
    
    return answer;
}

function transform(str) {
    const reg1 = /\(\)/i
    const reg2 = /\{\}/i
    const reg3 = /\[\]/i
    return str.replace(reg1, "").replace(reg2, "").replace(reg3, "");
}