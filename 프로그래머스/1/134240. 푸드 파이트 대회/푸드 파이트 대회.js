function solution(food) {
    let half = "";
    food.forEach((num, index) => {
        if(index === 0) return;
        half += String(index).repeat(Math.floor(num / 2))
    })
    return half + "0" + [...half].reverse().join("");
}