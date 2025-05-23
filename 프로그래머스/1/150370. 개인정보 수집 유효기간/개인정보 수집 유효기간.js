function solution(today, terms, privacies) {
    const answer = [];
    const termsObj = {};
    const todayDate = new Date(today);
    
    for (const term of terms) {
        const [type, month] = term.split(" ");
        termsObj[type] = +month;
    }
    
//     for (const privacy of privacies) {
        // const [date, type] = privacy.split(" ");
        // const [year, month, day] = date.split(".");
        
        // const expiredDate = new Date(year, month + termsObj[type], day);
        // console.log(expiredDate)
//     }
    for (let i = 0; i < privacies.length; i++) {
        const [date, type] = privacies[i].split(" ");
        const [year, month, day] = date.split(".").map(item => +item);
        
        const expiredDate = new Date(year, month - 1 + termsObj[type], day);
        
        if (todayDate >= expiredDate) {
            answer.push(i+1);
        }
    }
    
    console.log(answer)
    
    return answer;
}