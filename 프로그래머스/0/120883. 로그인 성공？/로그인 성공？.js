function solution(id_pw, db) {
    const user = db.find(el => el[0] === id_pw[0]);
    if (!user) {
        return 'fail';
    }
    
    const matchPw = id_pw[1] === user[1];
    
    if (matchPw) {
        return 'login';
    } else {
        return 'wrong pw';
    }
}