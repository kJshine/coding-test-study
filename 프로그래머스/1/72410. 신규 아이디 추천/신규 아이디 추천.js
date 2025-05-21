function solution(new_id) {
    let answer = new_id;
    
    // 1 단계: 소문자로 치환
    answer = answer.toLowerCase();
    
    // 2 단계: 특정 문자열 제외
    answer = answer.replace(/[^a-z0-9\-_\.]/g, "");
    
    // 3 단계: 마침표 변환
    answer = answer.replace(/\.{2,}/g, ".");
    
    // 4 단계: 마침표 변환 2
    if (answer[0] === '.') {
        answer = answer.slice(1);
    }
    answer = deleteLastDot(answer);
    
    // 5 단계: 빈 문자열 처리
    if (answer.length === 0) {
        answer += 'a';
    }
    
    // 6 단계: 갈이 처리
    if (answer.length > 15) {
        answer = deleteLastDot(answer.slice(0, 15));
    }
    
    // 7 단계: 길이 처리
    if (answer.length <= 2) {
        while (answer.length <= 2) {
            answer += answer.slice(-1);
        }
        answer = answer.slice(0,3);
    }
    
    function deleteLastDot(string) {
        if (string[string.length-1] === '.') {
            return string.slice(0, string.length-1);
        }
        return string;
    }
    
    return answer;
}