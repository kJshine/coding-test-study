function solution(spell, dic) {
    const filtered = dic.filter(str => {        
        if (str.length !== spell.length) {
            return false;
        }
        
        for (let i = 0; i < spell.length; i++) {
            if (!str.includes(spell[i])) {
                return false;
            }
        }
        
        return true;
    });
    
    return filtered.length === 0 ? 2 : 1;
}