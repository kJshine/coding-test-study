function solution(cacheSize, cities) {
    var answer = 0;
    const memory = [];
    
    if (cacheSize > 0) {
        for (const city of cities) {
            const lowerName = city.toLowerCase();

            if (memory.includes(lowerName)) {
                const index = memory.indexOf(lowerName);
                memory.splice(index, 1);
                memory.push(lowerName);
                answer += 1;
            } else {
                if (memory.length >= cacheSize) {
                    memory.shift();
                }
                memory.push(lowerName);
                answer += 5;
            }
        }
    } else {
        return cities.length * 5;
    }
    
    return answer;
}

// 캐시사이즈가 0보다 큰 경우=> 1. 메모리에 있는 경우, 참조 후에 해당 도시 가장 뒤로
//                        2. 메모리에 없응 경우, 가장 앞에 도시 삭제 후 맨 뒤에 추가
// 캐시사이즈가 0인 경우 => 도시 * 5                      