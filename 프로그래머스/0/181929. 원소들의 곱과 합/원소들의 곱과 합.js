function solution(num_list) {
    var answer = 0;
    let multiplyNum = 1;
    let addNum = 0;
    for (let i=0; i<num_list.length; i++) {
        multiplyNum *= num_list[i];
        addNum += num_list[i];
    }
    addNum = Math.pow(addNum, 2);
    return multiplyNum < addNum ? 1 : 0;
}