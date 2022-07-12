let sum = "";
const draw = function(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n * 2 - 1; j++) {
            if (i - j > 0 || i + j >= 2 * n - 1) {
                sum += "_ ";
            } else {
                sum += "* ";
            }
        }
        sum += "\n";
    }
    console.log(sum);
};

draw(4);