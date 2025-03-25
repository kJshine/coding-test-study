function solution(phone_book) {
    var answer = true;
    
    const sorted = phone_book.sort();
    
    for (let i = 0; i < sorted.length - 1; i++) {
        const origin = sorted[i];
        const originLength = origin.length;
        
        for (let j = i + 1; j < sorted.length; j++) {
            const sliced = [...sorted[j]].slice(0, originLength).join("");
            if (sorted[j].length < originLength || origin < sliced) break;
            if (origin === sliced) return false;
        }
    }
    
    return answer;
}