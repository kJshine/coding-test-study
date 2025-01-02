function solution(n)
{
    var answer = 0;
    for (const value of String(n)) {
        answer += Number(value);
    }

    return answer;
}