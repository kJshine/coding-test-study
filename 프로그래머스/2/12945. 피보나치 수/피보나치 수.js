function solution(n) {
    // let arr = Array.from({length: n}, (num, i) => {
    //     if (i === 0) return 0;
    //     if (i === 1) return 1;
    //     return arr[i-1] + arr[i-2];
    // });
    
    // 1. 선언 되기 전에 참조하려고 하여 오류
    
    const arr = new Array(n + 1).fill(0); // F[n] 을 참조하기 위해서는 0,1,2...n 이므로 n+1 길이를 생성해야함
    arr[1] = 1;
    
    for (let i = 2; i < arr.length; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567;
    }
    
    // return arr.pop();
    // 배열의 마지막 요소를 읽는다는 점에서 pop과 index참조랑 성능적으로는 차이가 없다
    // 하지만 가독성 측면에서 pop은 원본 배열에서 마지막 요소를 제거하는 기능도 있으므로 인덱스 참조 방식이 더 낫다
    return arr[n];
}