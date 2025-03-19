// function solution(N, stages) {
//     // 각 스테이지별 머물러있는 사용자 수를 카운트
//     const stageCount = Array(N + 2).fill(0);
//     for (const stage of stages) {
//         stageCount[stage]++;
//     }
    
//     // 실패율 계산을 위한 변수
//     const failRates = [];
//     let totalPlayers = stages.length;
    
//     // 실패율 계산
//     for (let i = 1; i <= N; i++) {
//         const playersInStage = stageCount[i];
//         const failRate = totalPlayers > 0 ? playersInStage / totalPlayers : 0;
        
//         failRates.push({ stage: i, rate: failRate });
//         totalPlayers -= playersInStage; // 다음 스테이지를 위해 현재 스테이지에 머물러있는 사용자 수를 뺌
//     }
    
//     // 실패율 내림차순으로 정렬, 실패율이 같으면 스테이지 번호 오름차순
//     failRates.sort((a, b) => {
//         if (a.rate === b.rate) {
//             return a.stage - b.stage;
//         }
//         return b.rate - a.rate;
//     });
    
//     // 정렬된 스테이지 번호만 반환
//     return failRates.map(item => item.stage);
// }

function solution(N, stages) {
    let answer = Array.from({length: N}, (_, i) => i+1);
    const failLate = {}

    for (let i = 1; i <= N; i++) {
        const numA = stages.filter(num => i === num).length;
        const numB = stages.filter(num => i <= num).length;
        failLate[i] = numA / numB;
    }

    answer.sort((a, b) => failLate[b] - failLate[a]);

    return answer;
}