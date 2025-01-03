function solution(my_string, overwrite_string, s) {
    // 1) my_string에서 인덱스 s까지 자름
    // my_string.slice(0, s)
    
    // 2) 뒤에 overwrite_string을 더함
    
    // 3) s <= my_string - overwrite_string 이므로 (s + 더한 문자열길이) 인덱스를 추가로 더함
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}