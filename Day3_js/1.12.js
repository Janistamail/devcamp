let result = "";
const draw = function(n) {
    for (let i = 0; i < n; i++) {
        let sum = "";
        for (let j = 0; j < n; j++) {
            if (i == j) {
                sum += "_";
            } else {
                sum += "*";
            }
        }
        sum = sum.split("").reverse().join("");
        result += sum;
        result += "\n";
    }
    return result;
};
console.log(draw(3));