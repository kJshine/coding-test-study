function solution(participant, completion) {
    // 배열을 정렬
    participant.sort();
    completion.sort();
    
    // 정렬된 배열을 비교하여 첫 번째로 다른 요소 찾기
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    
    // 모든 요소가 같다면 마지막 참가자가 완주하지 못한 것
    return participant[participant.length - 1];
}