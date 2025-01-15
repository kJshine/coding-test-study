function solution(rsp) {
    let answer = "";
    [...rsp].forEach(str => {
        switch(str) {
            case "0": return answer += "5";
            case "2": return answer += "0";
            case "5": return answer += "2";
        }
    }); 
    return answer;
}