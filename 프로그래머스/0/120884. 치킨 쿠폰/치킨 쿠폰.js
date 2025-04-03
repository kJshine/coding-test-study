function solution(chicken) {
    let answer = 0;
    while(chicken >= 10) {
        const service = Math.floor(chicken / 10);
        chicken = chicken - service * 9;
        answer += service;
    }
    
    return answer;
}
