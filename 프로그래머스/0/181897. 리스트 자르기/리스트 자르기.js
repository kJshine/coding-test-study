function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    const sliced = (n) => {
        switch(n) {
            case 1: return num_list.slice(0, b + 1)
                break;
            case 2: return num_list.slice(a)
                break;
            case 3: return num_list.slice(a, b + 1);
                break;
            case 4: return num_list.filter((num, i) => {
                return a <= i && i <= b && (a + c) % c === i % c
            });
        }
    }
    
    return sliced(n);
}