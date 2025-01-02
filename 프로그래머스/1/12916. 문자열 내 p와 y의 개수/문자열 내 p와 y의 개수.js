function solution(s){
    let pNum = 0;
    let yNum = 0;
    const arr = [...s.toLowerCase()].map((v) => {
       v === "p" ? pNum++ : v === "y" ? yNum++ : null; 
    });

    return Boolean(pNum === yNum);
}