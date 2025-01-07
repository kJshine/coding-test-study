function solution(num_list) {
    var answer = 0;
    let addEvenNum = "";
    let addOddNum = "";
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            addEvenNum += num_list[i]+"";
        } else {
            addOddNum += num_list[i]+"";
        }
    }
    return Number(addEvenNum) + Number(addOddNum);
}