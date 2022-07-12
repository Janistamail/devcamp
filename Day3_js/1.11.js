let sum = "";
const draw = function(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) {
                sum += "_";
            } else {
                sum += "*";
            }
        }
        sum += "\n";
    }
    return sum;
};
console.log(draw(3));