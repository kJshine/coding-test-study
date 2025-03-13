function solution(num_list) {
    const operate = (num) => {
        let result = 0;
        while (num !== 1) {
            if (num % 2 === 0) {
                num /= 2;
                result++;
            } else {
                num--;
            }
        }
        return result;
    }
    
    return num_list.reduce((acc, cur) => acc + operate(cur), 0);
}

