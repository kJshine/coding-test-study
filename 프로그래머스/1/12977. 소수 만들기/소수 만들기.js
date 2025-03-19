function solution(nums) {
    var answer = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i+1; j < nums.length - 1; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if(isPrime(nums[i]+nums[j]+nums[k])) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
    
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }

        return true;
    }
}