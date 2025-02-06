function solution(number) {
    var answer = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        let first = number[i];
        for (let j = i + 1; j < number.length - 1; j++) {
            let second = number[j];
            for (let k = j + 1; k < number.length; k++) {
                let third = number[k];
                if ((first + second + third) === 0) answer++;
            }
        }
    }
    
    return answer;
}