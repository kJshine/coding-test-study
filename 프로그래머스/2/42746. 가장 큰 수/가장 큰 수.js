function solution(numbers) {
    const sorted = numbers.sort((a, b) => {
        const stringA = a.toString();
        const stringB = b.toString();
        return (stringB + stringA).localeCompare(stringA + stringB);
    });
    
    const result = sorted.join("");
    
    return result[0] === '0' ? "0" : result;
}