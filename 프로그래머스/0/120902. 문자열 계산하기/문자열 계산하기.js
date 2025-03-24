function solution(my_string) {
    const arr = my_string.split(" ")
    let answer = +arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (!+arr[i]) continue;
        if (arr[i-1] === '+') {
            answer += +arr[i];
        } else {
            answer -= +arr[i]
        }
    }
    
    return answer;
}