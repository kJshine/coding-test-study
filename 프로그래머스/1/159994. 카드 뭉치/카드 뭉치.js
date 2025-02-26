function solution(cards1, cards2, goal) {
    let copyCard1 = [...cards1];
    let copyCard2 = [...cards2];
    
    for (let i = 0; i < goal.length; i++) {
        if (copyCard1[0] === goal[i]) {
            copyCard1.shift();
        } else if (copyCard2[0] === goal[i]) {
            copyCard2.shift();
        } else {
            return "No";
        }
    }
    return "Yes";
}