function solution(s) {
    var answer = "";
    answer = s.split(" ").map((v) => {
        var strArr = "";
        for (let i = 0; i < v.length; i++) {
            if (i === 0) strArr += v[0].toUpperCase();
            else strArr += v[i].toLowerCase();
        }
        return strArr;
    }).join(" ");
    return answer;
}