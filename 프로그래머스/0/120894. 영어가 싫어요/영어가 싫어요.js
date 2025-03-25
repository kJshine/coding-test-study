function solution(numbers) {
    const obj = {
        'zero': 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    }
    
    let answer = numbers;
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    
    for (let i = 0; i < keys.length; i++) {
        answer = answer.replaceAll(keys[i], values[i]);
    }
    
    return +answer;
}