function solution(start_num, end_num) {
    const answer = Array.from({length: end_num - start_num + 1}, (num, i) => num = start_num + i);
    return answer;
}