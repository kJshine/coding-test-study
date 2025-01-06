function solution(s) {
    let delZero = 0;
    let transNum = 0;
    
    function trans(str) {
        if (str !== "1") {
            transNum++;
            const repStr = str.replace(/0/g, "");
            const length = str.length - repStr.length;
            delZero += length;
            const radixStr = repStr.length.toString(2);
            trans(radixStr);
        }
    }
    
    trans(s);
    
    return [transNum, delZero];
}