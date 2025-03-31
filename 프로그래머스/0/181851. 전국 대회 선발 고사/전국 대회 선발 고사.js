function solution(rank, attendance) {
    let arr = [];
    let ranking = 1;
    
    while(arr.length !== 3) {
        const index = rank.indexOf(ranking);
        if (attendance[index]) {
            arr.push(index);
        }
        ranking++;
    }
    
    const [a, b, c] = arr;
    
    return 10000 * a + 100 * b + c;
}