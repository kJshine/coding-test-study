function solution(seoul) {
    var answer = '';
    seoul.map((v, i) => {
       if (v === "Kim") {
           answer = `김서방은 ${i}에 있다`;
           return;
       } 
    });
    return answer;
}