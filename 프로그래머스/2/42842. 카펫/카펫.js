function solution(brown, yellow) {
    // 약수를 구하는 효율적인 방법
    // 1. 약수 쌍의 특징: 약수는 대칭적으로 존재
    // 2. 계산 효율성을 위해 제곱근까지만 반복
    const arr = [];
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) arr.push([i, yellow / i].sort((a, b) => b - a));
    }
    
    // 구조 분해를 통해 arr의 각 약수 쌍 순회
    // yRow: 노란색 카펫의 행, yCol: 노란색 카펫의 열
    for (let [yRow, yCol] of arr) {
        if (brown === 2 * (yRow + 2) + 2 * (yCol)) {
            return [yRow + 2, yCol + 2];
        }
    }
}