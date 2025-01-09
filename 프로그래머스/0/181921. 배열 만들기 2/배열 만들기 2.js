function solution(l, r) {
    var answer = [0, 5];
    // l 자릿수, r 자릿수 확인
    // console.log((l+"").length, (r+"").length) // 1, 3
    
    // 배열에 5, 05, 005가 같은 숫자 인지 확인
    // console.log([5,05,005]) // 5, 5, 5
    
    // 1자리면 0, 5 / 2자리면 00, 05, 50, 55 를 갖게하고 싶다
    for (let i = 1; i < (r+"").length; i++) {
        const arr = answer.map((num) => ["5"+num, "0"+num]).flat();
        answer.push(...arr);
        const setArr = new Set(arr); // 중복된 값 제거
        answer = [...setArr];
    }
    answer = answer
        .map(num => Number(num))
        .sort((a, b) => a - b)
        .filter((num) => num !== 0 && l <= num && num <= r);
    return answer.length !== 0 ? answer : [-1];
}