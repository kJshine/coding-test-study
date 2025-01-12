function solution(hp) {
    let x, y, z;
    x = Math.floor(hp / 5);
    y = Math.floor((hp % 5) / 3);
    z = Math.floor((hp % 5) % 3);
    return x+y+z;
}