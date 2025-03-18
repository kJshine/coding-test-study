function solution(order) {
    return order.reduce((acc, cur) => {
        if (cur.includes('anything') || cur.includes('americano')) {
            return acc + 4500;
        } else {
            return acc + 5000;
        }
    }, 0);
}