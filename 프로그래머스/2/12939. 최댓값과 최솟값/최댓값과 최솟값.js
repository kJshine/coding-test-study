function solution(s) {
    var arr = s.split(" ").sort((a, b) => a - b);
    var answer = `${arr[0]} ${arr[arr.length - 1]}`
    
    return answer;
}