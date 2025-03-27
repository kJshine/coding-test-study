function solution(n, s) {
    var answer = [];
    let num = 1;
    
    if (n > s) {
        return [-1];
    } 
    
    while(num * n < s) {
        num++;
    }
    
    if (num * n === s) {
        return Array.from({length: n}, (_) => num);
    } else {
        const diff = num * n - s;
        return Array.from({length: n}, (_, i) => {
            if (i < diff) {
                return num - 1;
            } else {
                return num;
            }
        }).sort();
    }
}