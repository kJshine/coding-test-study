function solution(my_string, is_suffix) {
    const answer = Array.from({length: my_string.length}, (str, i) => 
                              [...my_string]
                              .slice(-i)
                              .join(""))
                              .includes(is_suffix);
    return Number(answer);
}