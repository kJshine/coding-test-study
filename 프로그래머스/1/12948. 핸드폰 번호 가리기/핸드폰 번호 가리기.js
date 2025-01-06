function solution(phone_number) {
    // 1. 전화번호 뒷 4자리를 선언
    // const lastPhoneNum = phone_number.slice(-4);
    
    // 2. padStart로 뒷 4자리 앞에 전화번호의 길이만큼 "*"를 추가
    // return lastPhoneNum.padStart(phone_number.length, "*");
    
    // 3. 한줄로 return
    return phone_number.slice(-4).padStart(phone_number.length, "*");
}