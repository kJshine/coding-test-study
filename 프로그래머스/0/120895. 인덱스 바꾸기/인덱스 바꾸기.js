function solution(my_string, num1, num2) {
    const str1 = [...my_string][num1];
    const str2 = [...my_string][num2];

    return [...my_string].reduce((acc, cur, i) => {
        if (i === num1) return acc + str2;
        if (i === num2) return acc + str1;
        return acc + cur;
    }, "");
}