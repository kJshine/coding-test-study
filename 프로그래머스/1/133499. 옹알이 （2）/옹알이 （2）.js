function solution(babbling) {
    const babbles = {
        aya: 0,
        ye: 1,
        woo: 2,
        ma: 3,
    }
    
    const keys = Object.keys(babbles);
    const values = Object.values(babbles);
    
    const answer = babbling.filter(babble => {
        let replaced = babble; 
        for (let i = 0; i < keys.length; i++) {
            replaced = replaced.replaceAll(keys[i], values[i]);
        }
        
        if (Number.isInteger(+replaced)) {
            for (let i = 1; i <= replaced.length; i++) {
                if (replaced[i] === replaced[i-1]) return false;
            }
            return true;
        }
        return false;
    })
    
    return answer.length;
}