let sum = "";
const draw = function(n) {
    for (let i = 1; i <= n; i++) {
        let m = 1;
        for (let j = 1; j <= n; j++) {
            if (m <= i) {
                sum += "*";
            } else {
                sum += "_";
            }
            m++;
        }
        sum += "\n";
    }
    return sum;
};
console.log(draw(3));