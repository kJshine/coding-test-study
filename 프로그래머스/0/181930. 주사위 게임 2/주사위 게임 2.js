function solution(a, b, c) {
    var answer = 0;
    // 1. 세 숫자가 모두 다르다 : a !== b && a !== c && b !== c
    // 2. 두 숫자는 같고, 나머지가 다르다 a,b / a,c / b,c
    // a === b && b !== c / a === c && a !== b / b === c && a !== b
    // 3. 세 숫자가 모두 같다 a === b && b === c
    if (a === b && b === c) {
        answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow                  (b, 3) + Math.pow(c, 3));
    } else if (a !== b && a !== c && b !== c) {
        answer = a + b + c;
    } else {
        answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    }
    
    // 조건문을 조금 더 간소화 할 수 있을까?
    // 세 숫자가 모두 같다 => Math.max(a, b, c) === Math.min(a, b, c) : 간소화 되지는 않음
    // 세 숫자가 모두 다르다, 두 숫자가 같고 하나만 다르다 => ??? 다른 방법이 생각나지 않음
    return answer;
}