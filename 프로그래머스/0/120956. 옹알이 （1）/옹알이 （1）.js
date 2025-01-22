const can = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
    let answer = 0;
    babbling.forEach((str) => {
        slice(str).length === 0 ? answer += 1 : null;
    });
    return answer;
}

function slice(str) {
    const two = str.slice(0, 2);
    const three = str.slice(0, 3);
    
    if (can.includes(two))
        return slice(str.slice(2));
    
    if (can.includes(three))
        return slice(str.slice(3));

    return str
}