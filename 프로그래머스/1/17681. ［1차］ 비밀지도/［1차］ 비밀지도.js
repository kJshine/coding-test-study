function solution(n, arr1, arr2) {
    var answer = [];
    arr1.forEach((num,i) => {
        const str1 = arr1[i].toString(2).padStart(n, "0");
        const str2 = arr2[i].toString(2).padStart(n, "0");
        
        let pushed = "";
        for (let i = 0; i < str1.length; i++) {
            pushed += str1[i] === "1" || str2[i] === "1" ? "#" : " ";
        }
        answer.push(pushed);
    })
    return answer;
}