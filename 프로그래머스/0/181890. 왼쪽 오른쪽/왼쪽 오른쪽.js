function solution(str_list) {
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "l") {
            if (i === 0) return [];
            return str_list.slice(0, i);
        } else if (str_list[i] === "r") {
            if (i === str_list.length - 1) return [];
            return str_list.slice(i + 1);
        }
    }
    return [];
}