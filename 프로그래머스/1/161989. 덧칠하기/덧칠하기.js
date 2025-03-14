// function solution(n, m, section) {
//     var answer = 0;
//     let remainSection = section.slice();
    
//     while (remainSection.length) {
//         answer++;
//         if (remainSection[0] + m > n) {
//             return answer;
//         } else {
//             remainSection = remainSection.filter((num) => remainSection[0] + m <= num);
//         }
//     }
//     return answer;
// }

function solution(n, m, section) {
    let answer = 0;
    let lastPainted = 0;
    
    for (const sect of section) {
        if (sect <= lastPainted) continue;
        answer++;
        
        lastPainted = sect + m - 1;
    }
    
    return answer;
}
