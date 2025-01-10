function solution(my_string) {
    return Array.from({length: my_string.length},(v, i) => my_string
                      .slice(-i)
                     ).sort();
}