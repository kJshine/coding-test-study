function solution(num, total) {
    const x = (total - num * (num - 1) / 2) / num;
    return Array.from({length: num}, (_, i) => x + i);
}

