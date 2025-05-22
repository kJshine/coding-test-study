function solution(word) {
    var answer = 0;
    let string = '';
    
    while(string !== word) {
        const lastStr = string.slice(-1); // A
        if (string.length < 5) {
            // 5자리가 채워지지 않았다면 'A'추가
            string += 'A';
        } else if (lastStr !== 'U') {
            // 'U가 아니라면 증감'
            string = string.slice(0, string.length-1) + nextStr(lastStr);
        } else {
            let slicedLength = -1;
            for (; slicedLength >= -(string.length); slicedLength--) {
                // 연속된 U 찾기
                const sliced = string.slice(slicedLength);
                if (![...sliced].every(item => item === "U")) {
                    slicedLength++;
                    break;
                }
            }
            
            // 연속된 U까지 자름
            string = string.slice(0, string.length + slicedLength );
            
            const lastStr2 = string.slice(-1)
            
            // 잘라진 문자열 마지막 증감
            string = string.slice(0, string.length-1) + nextStr(lastStr2);
        }
        
        answer++;
    }
    
    function nextStr(str) {
        switch(str) {
            case 'A': return 'E';
                break;
            case 'E': return 'I';
                break;
            case 'I': return 'O';
                break;
            case 'O': return 'U';
                break;
        }
    }
    
    return answer;
}

