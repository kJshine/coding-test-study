function solution(progresses, speeds) {
    let arr = [];
    let prevTask = 0;
    for (let i = 0; i < progresses.length; i++) {
        const task = Math.ceil((100 - progresses[i]) / speeds[i]);
        if (prevTask < task) {
            arr.push(1)
            prevTask = task;
        } else {
            arr[arr.length - 1]++;
        }
    }
    return arr;
}