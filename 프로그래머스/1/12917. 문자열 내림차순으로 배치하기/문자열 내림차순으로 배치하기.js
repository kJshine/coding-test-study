function solution(s) {
    return [...s].sort((a, b) => {
        const numA = a.charCodeAt();
        const numB = b.charCodeAt();
        
        return numB - numA;
    }).join("");
}