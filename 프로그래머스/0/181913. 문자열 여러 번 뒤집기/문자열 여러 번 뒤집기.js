function solution(my_string, queries) {
    let answer = [...my_string];
    
    for (let query of queries) {
        const [start, end] = query;
        const reversed = answer.slice(start, end + 1).reverse();
        answer.splice(start, end - start + 1, ...reversed);
    }
    
    return answer.join("");
}