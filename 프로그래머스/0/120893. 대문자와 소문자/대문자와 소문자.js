function solution(my_string) {
    return [...my_string].reduce((acc, cur) => {
        let str = "";
        if (cur === cur.toUpperCase()) str = cur.toLowerCase();
        else str = cur.toUpperCase();
        return acc += str;
    }, "");
}