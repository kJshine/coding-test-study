function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);
    return emergency.reduce((acc, cur, i) => {
        acc[i] = sorted.indexOf(cur) + 1;
        return acc;
    }, []);
}