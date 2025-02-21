function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach((num, index) => {
        if (index % 2 !== 0) odd += num;
        else even += num;
    });
    return Math.max(odd, even);
}