function solution(my_string) {
    let answer = new Array(52).fill(0);
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    [...my_string].forEach(str => {
        const index = string.indexOf(str);
        answer[index]++;
    })
    
    return answer;
}