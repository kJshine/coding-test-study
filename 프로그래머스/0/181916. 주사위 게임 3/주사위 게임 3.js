function solution(a, b, c, d) {
    // const set = new Set([a, b, c, d]);
    // const arr = [...set];
    // const sortArr = [a,b,c,d].sort((a, b) => a - b);
    // switch(arr.length) {
    //     case 1: 
    //         return 1111 * arr[0];
    //     case 2: {
    //         const p = sortArr[1];
    //         const q = sortArr[2];
    //         const r = sortArr[0] === p ? sortArr[3] : sortArr[0];
    //         return p === q ? Math.pow((10*p+r), 2) : (p+q)*Math.abs(p-q);
    //     }
    //     case 3: {
    //         const q = sortArr[0] === sortArr[1] ? sortArr[2] : sortArr[1];
    //         const r = sortArr[0] === sortArr[1] ? sortArr[3] : sortArr[1];
    //         return q * r;
    //     }
    //     case 4: 
    //         return Math.min(...arr)
    // }
    
    const countMap = new Map();
    [a, b, c, d].forEach(x => {
       countMap.set(x, (countMap.get(x) || 0) + 1);
    });
    
    // console.log(countMap) // ex) Map(2) { 4 => 3, 1 => 1 }
    // console.log(...countMap); // [ 4, 3 ] [ 1, 1 ]
    
    // 등장 횟수가 많은 순, 같으면 숫자가 큰 순으로 정렬
    // [...countMap].sort((a, b) => {
    //     if (b[1] - a[1] !== 0) { // 등장 횟수가 다르면
    //         return b[1] - a[1] // 등장 횟수가 많은 순            
    //     }
    //     return b[0] - a[0] // 등장 횟수가 같으면 숫자가 큰 순
    // });
    
    // 위를 풀어내면 아래 식
    const sorted = [...countMap].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
    
    switch(sorted.length) {
        case 1: return 1111 * sorted[0][0];
        case 2: {
            // 세 주사위 나온 숫자 p, 나머지 다른주사위 q
            if (sorted[0][1] === 3) {
                return Math.pow(10*sorted[0][0] + sorted[1][0], 2);
            }
            return (sorted[0][0] + sorted[1][0]) * Math.abs(sorted[0][0] - sorted[1][0]);
        }
        case 3: return sorted[1][0] * sorted[2][0];
        case 4: return Math.min(a, b, c, d);
    }
}